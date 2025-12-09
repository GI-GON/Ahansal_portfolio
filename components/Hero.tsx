import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-6 relative inline-block">
          <img 
            src={PROFILE.avatarUrl} 
            alt={PROFILE.name} 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-card shadow-xl object-cover bg-card"
          />
          <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-card rounded-full"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4 uppercase">
          {PROFILE.name}
        </h1>
        
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
          {PROFILE.title}
        </h2>
        
        <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
          {PROFILE.bio}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-slate-400 text-sm">
           <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-slate-800">
             <MapPin size={16} /> {PROFILE.location}
           </div>
           <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-slate-800 hover:border-primary transition-colors">
             <Mail size={16} /> Contact
           </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer" className="p-3 bg-card rounded-lg hover:bg-slate-800 transition-colors text-white border border-slate-800">
            <Github size={24} />
          </a>
          <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="p-3 bg-card rounded-lg hover:bg-slate-800 transition-colors text-blue-500 border border-slate-800">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;