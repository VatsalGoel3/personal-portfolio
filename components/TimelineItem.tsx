interface TimelineItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export default function TimelineItem({
  title,
  company,
  duration,
  description,
  technologies
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-700">
        <div className="absolute top-2 -left-[5px] h-3 w-3 rounded-full bg-emerald-500" />
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="text-emerald-500 font-medium">{company}</div>
          <div className="text-gray-400 text-sm">{duration}</div>
        </div>
        
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300">
              • {item}
            </li>
          ))}
        </ul>

        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-800 rounded-full text-emerald-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 