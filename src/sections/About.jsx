import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-16 py-16">

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mt-12 mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          We Build <span className="text-orange-500">Digital Experiences</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Not just websites. Not just apps.  
          We create solutions that make an impact and tell a story.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-5">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every great product starts with a problem.  
            Our journey began with a simple idea — use technology to solve
            real-world challenges in the most elegant way possible.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We focus on clarity, performance, and user experience, ensuring
            every product we build feels intuitive and future-ready.
          </p>
        </div>

        <div className="bg-gray-800/40 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">What Drives Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li>✨ Passion for clean & scalable code</li>
            <li>🎯 Focus on real-life problem solving</li>
            <li>📈 Growth mindset & continuous learning</li>
            <li>🤝 Strong teamwork & collaboration</li>
          </ul>
        </div>
      </div>

      {/* What We Do Cards */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Do Best
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Modern, fast, and scalable websites using the latest technologies.",
            },
            {
              title: "UI/UX Design",
              desc: "Clean, user-focused designs that feel simple and intuitive.",
            },
            {
              title: "Performance Optimization",
              desc: "Speed, SEO, and performance that actually matter.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
        {[
          { number: "10+", label: "Projects Completed" },
          { number: "5+", label: "Technologies Used" },
          { number: "100%", label: "Learning Driven" },
          { number: "∞", label: "Ideas Ahead" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          To create digital products that are meaningful, accessible, and
          impactful — while growing as developers, creators, and problem solvers.
        </p>
      </div>

    </div>
  );
};

export default About;
