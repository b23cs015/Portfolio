import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, institution, description }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full" />
        <div className="w-1 h-full bg-blue-500" />
      </div>
      <div className="pb-8">
        <div className="flex items-center mb-1">
          <Calendar className="h-4 w-4 text-blue-500 mr-2" />
          <span className="text-sm text-blue-500 dark:text-blue-400 font-medium">{year}</span>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{institution}</p>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

interface CertificationProps {
  title: string;
  organization: string;
}

const CertificationItem: React.FC<CertificationProps> = ({ title, organization }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        <Award className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{organization}</p>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const educationItems = [
    {
      year: '2019 - 2023',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Kakatiya Institute of Technology and Science',
      description: 'CGPA: 9.03/10 (up to 3rd semester)'
    },
    {
      year: '2017 - 2019',
      title: 'Intermediate Education',
      institution: 'S.R Junior College',
      description: 'Telangana State Board of Intermediate Education, Marks: 903/1000'
    },
    {
      year: '2017',
      title: 'Secondary Education',
      institution: 'SPR High School',
      description: 'Board of Secondary Education, GPA: 10/10'
    }
  ];

  const certifications = [
    {
      title: 'MATLAB Simulation',
      organization: 'MATLAB'
    },
    {
      title: 'Smart India Hackathon',
      organization: 'Government of India'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-blue-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My educational background and professional certifications that have shaped my skills
            and knowledge in the field of computer science and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-blue-500 mr-2" />
              Education Timeline
            </h3>
            <div className="ml-4">
              {educationItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  institution={item.institution}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 text-blue-500 mr-2" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <CertificationItem
                  key={index}
                  title={cert.title}
                  organization={cert.organization}
                />
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Skills Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Beyond formal education, I continuously enhance my skills through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-3">✓</div>
                  <span>Self-guided learning through online resources and tutorials</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-3">✓</div>
                  <span>Participation in coding challenges and hackathons</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-3">✓</div>
                  <span>Building personal projects to apply and reinforce learning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-3">✓</div>
                  <span>Collaboration with peers on team-based projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;