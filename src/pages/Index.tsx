
import { useEffect, useRef } from 'react';
import { Mail, Linkedin, Instagram } from "lucide-react";

const projects = {
  facilitation: [
    {
      title: "Workshop Design",
      description: "Interactive workshop series focusing on team dynamics and leadership development.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      points: [
        "Developed custom facilitation materials",
        "Led sessions for 200+ participants",
        "95% positive feedback rate"
      ]
    },
    {
      title: "Leadership Training",
      description: "Executive leadership development program for multinational corporation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      points: [
        "Customized curriculum development",
        "Virtual and in-person sessions",
        "Leadership competency framework"
      ]
    },
    {
      title: "Team Building",
      description: "Remote team cohesion and collaboration workshops.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      points: [
        "Virtual team building activities",
        "Cross-cultural communication",
        "Remote collaboration tools"
      ]
    },
    {
      title: "Conference Facilitation",
      description: "Large-scale international conference moderation and facilitation.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      points: [
        "Multi-track session management",
        "Panel discussion moderation",
        "Participant engagement strategies"
      ]
    }
  ],
  learning: [
    {
      title: "E-Learning Platform",
      description: "Comprehensive online learning system with interactive modules and assessments.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      points: [
        "Created 50+ interactive modules",
        "Increased completion rates by 40%",
        "Mobile-responsive design"
      ]
    },
    {
      title: "Microlearning Series",
      description: "Bite-sized learning modules for professional development.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      points: [
        "5-minute learning segments",
        "Mobile-first approach",
        "Gamification elements"
      ]
    },
    {
      title: "Learning Management System",
      description: "Custom LMS development for corporate training.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
      points: [
        "User analytics dashboard",
        "Progress tracking",
        "Certification system"
      ]
    },
    {
      title: "Blended Learning Program",
      description: "Hybrid learning experience combining digital and in-person elements.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
      points: [
        "Synchronized learning paths",
        "Interactive workshops",
        "Digital resource library"
      ]
    }
  ],
  multimedia: [
    {
      title: "Video Production",
      description: "Educational video series explaining complex topics through animation and storytelling.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      points: [
        "Produced 30+ educational videos",
        "1M+ total views",
        "Award-winning content"
      ]
    },
    {
      title: "Podcast Series",
      description: "Weekly educational podcast focusing on learning innovation.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
      points: [
        "50+ episodes produced",
        "Expert interviews",
        "Professional audio quality"
      ]
    },
    {
      title: "Interactive Presentations",
      description: "Dynamic presentation designs for keynote speeches and conferences.",
      image: "https://images.unsplash.com/photo-1558403194-611308249627",
      points: [
        "Custom animation",
        "Interactive elements",
        "Visual storytelling"
      ]
    },
    {
      title: "Digital Learning Assets",
      description: "Suite of multimedia resources for online courses.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      points: [
        "3D animations",
        "Infographic design",
        "Interactive quizzes"
      ]
    }
  ]
};

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

const SocialLink = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-neutral-600 hover:text-accent transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm">{label}</span>
    </a>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="py-20 px-6 text-center animate-fade-in">
        <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-xl text-neutral-800 max-w-2xl mx-auto">
          Instructional Designer • Facilitator • Multimedia Producer
        </p>
      </header>
      
      <main className="container mx-auto px-6 max-w-6xl">
        <Section title="Facilitation" projects={projects.facilitation} index={0} />
        <Section title="Learning" projects={projects.learning} index={1} />
        <Section title="Multimedia" projects={projects.multimedia} index={2} />
      </main>

      <footer className="py-12 px-6 border-t border-neutral-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-neutral-600">© {new Date().getFullYear()} • Built with purpose</p>
            <div className="flex items-center gap-6">
              <SocialLink 
                href="https://linkedin.com/in/yourusername" 
                icon={Linkedin} 
                label="LinkedIn"
              />
              <SocialLink 
                href="https://instagram.com/yourusername" 
                icon={Instagram} 
                label="Instagram"
              />
              <SocialLink 
                href="mailto:your.email@example.com" 
                icon={Mail} 
                label="Email"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
