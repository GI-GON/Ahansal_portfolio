import React from 'react';
import { EducationItem } from '../types';
import { GraduationCap, Calendar } from 'lucide-react';

interface TimelineProps {
  items: EducationItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
      {items.map((item, index) => (
        <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-card group-hover:bg-slate-800 group-hover:border-primary transition-all shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
            <GraduationCap size={20} className="text-primary" />
          </div>
          
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl border border-slate-800 shadow-lg hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-200">{item.school}</div>
              <time className="font-mono text-xs text-primary flex items-center gap-1">
                <Calendar size={12} /> {item.year}
              </time>
            </div>
            <div className="text-slate-300 font-medium mb-2">{item.degree}</div>
            <div className="text-slate-400 text-sm">{item.description}</div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Timeline;