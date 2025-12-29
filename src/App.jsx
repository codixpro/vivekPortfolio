import React, { useState } from "react";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Navbar from "./components/Navbar";
import Filter from "./sections/Filter";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="relative bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.03),transparent_70%),linear-gradient(135deg,#1B1B1B_0%,#0F0F0F_100%)] min-h-screen w-full overflow-hidden">

      <div className="relative z-10">
        <Navbar />

        {activeSection === "home" && (
          <Home onSkillClick={() => setActiveSection("skills")} />
        )}

        {activeSection === "skills" && (
          <Filter onHomeClick={() => setActiveSection("home")} />
        )}
      </div>
    </div>
  );
};

export default App;
