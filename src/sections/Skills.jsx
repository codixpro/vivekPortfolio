


const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-center">Skills</h1>
      <div className="flex items-center justify-center gap-8 pt-12">
        <div className="text-white w-[350px] border border-orange-500 p-4 rounded-2xl hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-200">
          <h1 className="text-2xl font-bold">PRD Writing</h1>
          <p className="mt-3 text-xs">Clear PRDs, aligned roadmaps, and iterative product launches</p>
          <div className="flex gap-2 mt-3.5">
            <span className="inline-block text-xs px-3 py-1 rounded-[6px] bg-gray-800 text-gray-400 ">
              Documentation
            </span>
            <span className="inline-block text-xs px-3 py-1 rounded-[6px] bg-gray-800 text-gray-400 ">
              Execution
            </span>
          </div>
          <div className="flex justify-between gap-2 mt-3.5">
            <div>16 PRDs #</div>
            <div className="text-orange-500">View PRDs -?</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills