import { useEffect, useState } from "react";
import Skills from "./Skills";
import { Undo2,FolderOpen    } from 'lucide-react';
const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy7QqKiwrJ6D4LwACgpvAHiSfXVAVD8-M9dXCVtD4HUyY0BlMndqct75jto_X4vGuTNlZHHp17c0A6/pub?gid=0&single=true&output=csv";

const categories = ["all", "frontend", "backend", "design"];

const Filter = ({ onHomeClick }) => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(SHEET_URL)
            .then((res) => res.text())
            .then((csv) => {
                const rows = csv.split("\n").slice(1);

                const parsedData = rows
                    .map((row) => {
                        const [title, category, description, link] = row.split(",");
                        if (!title) return null;

                        return {
                            title: title.trim(),
                            category: category?.trim(),
                            description: description?.trim(),
                            link: link?.trim(),
                        };
                    })
                    .filter(Boolean);

                setData(parsedData);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching sheet:", err);
                setLoading(false);
            });
    }, []);

    const filteredData =
        active === "all"
            ? data
            : data.filter((item) => item.category === active);

    return (
        <div className="flex justify-center items-center pt-10">
            <section className="max-w-6xl mx-auto px-4 py-10 w-full">
                <div className="flex justify-between pb-4">
                    <button
                        onClick={onHomeClick}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white">
                        <Undo2 /> Home
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition bg-orange-500 text-white hover:bg-gray-500 hover:text-white">
                        <FolderOpen  /> Project
                    </button>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold text-white text-center mb-6">
                    My Skills
                </h1>

                {/* Filter Buttons */}
                <div className="flex justify-center flex-wrap gap-3 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${active === cat
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Loading / Cards */}
                {loading ? (
                    <p className="text-center text-gray-300 text-lg animate-pulse">
                        Loading...
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredData.map((item, index) => (
                            <Skills
                                key={index}
                                title={item.title}
                                description={item.description}
                                categories={item.category}
                                link={item.link}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Filter;
