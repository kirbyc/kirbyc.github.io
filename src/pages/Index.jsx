
import { Mail, Linkedin, Instagram } from "lucide-react";
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { projects } from '../data/projects';

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
