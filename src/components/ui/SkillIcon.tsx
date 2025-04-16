import React from 'react';
import { Skill } from '../../types/skill';
import Card from './Card';

interface SkillIconProps {
  skill: Skill;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  return (
    <Card className="flex flex-col items-center justify-center text-center p-6 transition-transform hover:scale-105">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full" />
      </div>
      <h3 className="text-lg font-medium text-white">{skill.name}</h3>
    </Card>
  );
};

export default SkillIcon;