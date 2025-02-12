
const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video mb-4 overflow-hidden rounded-md">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <h3 className="font-mono text-lg font-bold mb-2">{project.title}</h3>
      <p className="text-neutral-800 mb-4">{project.description}</p>
      <ul className="space-y-2">
        {project.points.map((point, i) => (
          <li key={i} className="flex items-start">
            <span className="text-accent mr-2">•</span>
            <span className="text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
