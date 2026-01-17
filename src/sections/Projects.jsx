const Projects = () => {
  return (
    <div className="text-center text-white h-[60vh] ">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
          <p className="text-gray-300 text-sm">
            React + Tailwind based personal portfolio.
          </p>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Skill Filter App</h2>
          <p className="text-gray-300 text-sm">
            Google Sheet data + category filtering.
          </p>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Dashboard UI</h2>
          <p className="text-gray-300 text-sm">
            Clean admin UI with charts and cards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
