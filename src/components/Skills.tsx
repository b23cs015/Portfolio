import React from 'react';

interface SkillProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, percentage, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">{name}</h3>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${color}`} 
          style={{ 
            width: `${percentage}%`,
            transition: 'width 1s ease-in-out'
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const technicalSkills: SkillProps[] = [
    { name: 'HTML', percentage: 90, color: 'bg-orange-500' },
    { name: 'CSS', percentage: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 80, color: 'bg-yellow-500' },
    { name: 'Java', percentage: 85, color: 'bg-red-500' },
    { name: 'C', percentage: 80, color: 'bg-purple-500' },
    { name: 'SQL', percentage: 75, color: 'bg-green-500' },
  ];

  const softSkills: SkillProps[] = [
    { name: 'Problem Solving', percentage: 90, color: 'bg-indigo-500' },
    { name: 'Communication', percentage: 85, color: 'bg-pink-500' },
    { name: 'Teamwork', percentage: 80, color: 'bg-cyan-500' },
    { name: 'Time Management', percentage: 75, color: 'bg-lime-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I've developed a diverse set of skills throughout my education and projects.
            Here's an overview of my technical abilities and soft skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
            {technicalSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
            {softSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {['HTML', 'CSS', 'JavaScript', 'Java', 'C', 'SQL'].map((tech) => (
            <div key={tech} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-blue-500 font-semibold text-lg">{tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;