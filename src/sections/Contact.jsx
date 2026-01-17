import { TallyForm } from "react-tally";

const Contact = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
                {/* Heading */}
                <div className="text-center mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Let’s Work Together
                    </h1>
                    <p className="text-gray-300 mt-1 text-sm md:text-base">
                        Let’s discuss your idea or project
                    </p>
                </div>
                {/* Form Wrapper */}
                <div className="-mt-2 rounded-xl overflow-hidden  border-white/10 relative">
                    <TallyForm
                        formId="kdeAed"
                        style={{
                            width: "100%",
                            height: "300px",
                            border: "none",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
