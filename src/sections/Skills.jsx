import { MoveRight ,FileText } from 'lucide-react';

const Skills = ({key, title, description, categories, categories2 ,link}) => {
  return (
    <a  key={key}>
      <div className="flex items-center justify-center gap-8 pt-12">
        <div href={link} target="_blank" className="text-white w-[350px] border border-orange-500 p-4 rounded-2xl hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-200">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-3 text-xs">{description}</p>
          <div className="flex gap-2 mt-3.5">
            <span className="inline-block text-xs px-3 py-1 rounded-[6px] bg-gray-900 text-gray-400 ">
              Document
            </span>
            <span className="inline-block text-xs px-3 py-1 rounded-[6px] bg-gray-900 text-gray-400 ">
              {categories}
            </span>
          </div>
          <div className="flex justify-between gap-2 mt-3.5">
            <div className="text-white text-sm flex items-center gap-1">16 PRDs <FileText size={16} /></div>
            <div className="text-orange-500 text-sm flex items-center gap-2">View PRDs <MoveRight size={16} /></div>
        </div>
      </div>
    </div>
    </a>
  )
}

export default Skills