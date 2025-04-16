import React from 'react';
import { skills } from '../../data/skills';
import SkillIcon from '../ui/SkillIcon';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-lighter">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've honed my skills in various design and development tools to create seamless user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillIcon key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;