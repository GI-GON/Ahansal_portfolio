import React from 'react';
import { SkillItem } from '../types';

interface SkillListProps {
  skills: SkillItem[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const categories = {
    frontend: "Frontend",
    backend: "Backend & Data",
    tools: "Outils & DevOps",
    soft: "Soft Skills"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {(Object.keys(categories) as Array<keyof typeof categories>).map((catKey) => {
        const catSkills = skills.filter(s => s.category === catKey);
        if (catSkills.length === 0) return null;

        return (
          <div key={catKey} className="bg-card/50 rounded-2xl p-6 border border-slate-800">
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-slate-800 pb-2">
              {categories[catKey]}
            </h3>
            <div className="space-y-4">
              {catSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                    <span className="text-slate-500 text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillList;