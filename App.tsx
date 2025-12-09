import React, { useState } from 'react';
import { Category } from './types';
import { PROJECTS, EDUCATION, SKILLS } from './constants';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import SkillList from './components/SkillList';
import { Briefcase, BookOpen, Code, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.PROJECTS);

  // Helper to render content based on active tab
  const renderContent = () => {
    switch (activeCategory) {
      case Category.PROJECTS:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        );
      case Category.EDUCATION:
        return (
          <div className="animate-fadeIn">
            <Timeline items={EDUCATION} />
          </div>
        );
      case Category.SKILLS:
        return (
          <div className="animate-fadeIn">
            <SkillList skills={SKILLS} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* Navbar Simple */}
      <nav className="fixed top-0 w-full z-50 bg-darker/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-white">
            Portfolio<span className="text-primary">.</span>
          </span>
          <div className="text-sm text-slate-400 hidden sm:block">
            Pret à déployer sur Azure
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="min-h-screen pb-20">
        
        <Hero />

        {/* Category Selector (The "Hand" to show info) */}
        <div className="sticky top-16 z-40 bg-darker/95 py-4 border-b border-slate-800 shadow-2xl mb-12">
          <div className="max-w-7xl mx-auto px-6 flex justify-center">
            <div className="inline-flex bg-slate-900/50 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveCategory(Category.PROJECTS)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === Category.PROJECTS
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Briefcase size={16} />
                <span className="hidden sm:inline">Mes</span> Projets
              </button>
              
              <button
                onClick={() => setActiveCategory(Category.EDUCATION)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === Category.EDUCATION
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <BookOpen size={16} />
                Parcours
              </button>
              
              <button
                onClick={() => setActiveCategory(Category.SKILLS)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === Category.SKILLS
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Code size={16} />
                Compétences
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="max-w-7xl mx-auto px-6 min-h-[500px]">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">
            {activeCategory === Category.PROJECTS && "Réalisations Récentes"}
            {activeCategory === Category.EDUCATION && "Mon Parcours Académique"}
            {activeCategory === Category.SKILLS && "Mon Expertise Technique"}
          </h2>
          {renderContent()}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 mb-4 flex items-center justify-center gap-2">
            Fait avec <Heart size={16} className="text-red-500 fill-red-500" /> en React & Tailwind
          </p>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;