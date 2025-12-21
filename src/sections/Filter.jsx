import { useEffect, useState } from "react";

const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy7QqKiwrJ6D4LwACgpvAHiSfXVAVD8-M9dXCVtD4HUyY0BlMndqct75jto_X4vGuTNlZHHp17c0A6/pub?gid=0&single=true&output=csv";

const categories = ["all", "frontend", "backend", "design"];

const Filter = () => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState("all");

    useEffect(() => {
        fetch(SHEET_URL)
            .then((res) => res.text())
            .then((csv) => {
                const rows = csv.split("\n").slice(1);
                const parsedData = rows.map((row) => {
                    const [title, category, description, link] = row.split(",");
                    return { title, category, description, link };
                });
                setData(parsedData);
            });
    }, []);

    const filtered =
        active === "all"
            ? data
            : data.filter((item) => item.category === active);

    return (
        <section className="max-w-6xl mx-auto px-4 py-10 bg-black ">
            {/* Filters */}
            <h1 className="text-4xl font-bold text-white text-center mb-3">My Skills</h1>
            <div className="flex flex-wrap gap-3 mb-8">
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

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item, index) => (
                    <div
                        key={index}
                        className="text-white w-[350px] border border-amber-600 p-4 rounded-2xl hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-200">
                        <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                        </h3>

                        <p className="text-white text-sm mb-4">
                            {item.description}
                        </p>

                        <div className="flex justify-between">
                            <span className="inline-block text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                                {item.category}
                            </span>
                            <span className="flex justify-end">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 ml-2"
                                >
                                    View
                                </a>
                            </span>
                        </div>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default Filter;
