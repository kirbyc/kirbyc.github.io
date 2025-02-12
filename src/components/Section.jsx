
import ProjectCard from './ProjectCard';

const Section = ({ title, projects, index }) => {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-800 text-sm rounded-full mb-2">
          {title}
        </span>
        <h2 className="font-mono text-3xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i + index * 4} />
        ))}
      </div>
    </section>
  );
};

export default Section;
