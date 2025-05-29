import React from 'react';
import { Code, Database, Layout, Monitor } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: <Layout className="h-6 w-6 text-blue-500" />,
      title: 'Web Development',
      description: 'Creating responsive and modern websites with clean code and optimal performance.'
    },
    {
      icon: <Code className="h-6 w-6 text-blue-500" />,
      title: 'Frontend Development',
      description: 'Building interactive user interfaces with HTML, CSS, and JavaScript.'
    },
    {
      icon: <Database className="h-6 w-6 text-blue-500" />,
      title: 'Database Management',
      description: 'Designing and managing SQL databases for optimal data storage and retrieval.'
    },
    {
      icon: <Monitor className="h-6 w-6 text-blue-500" />,
      title: 'Application Development',
      description: 'Creating software applications with Java and C programming languages.'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer based in Hanamkonda, India, with a strong foundation in
            computer science and a keen interest in creating efficient and user-friendly applications.
            My journey in technology started with a curiosity about how software works and has evolved into
            a career focused on developing solutions that make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full inline-block mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With a Bachelor's degree in Computer Science and Engineering from Kakatiya Institute of Technology and Science,
              I've built a strong foundation in programming principles and software development. My academic excellence,
              reflected in my CGPA of 9.03/10, demonstrates my commitment to learning and mastering new concepts.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy tackling complex problems and creating efficient solutions. My experience includes
              developing web applications, creating interactive interfaces, and working with databases.
              I'm continuously learning and improving my skills to stay current with industry trends and technologies.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="font-bold text-blue-500 text-lg mb-2">2+ Years</h4>
              <p className="text-gray-600 dark:text-gray-400">Coding Experience</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="font-bold text-blue-500 text-lg mb-2">5+ Projects</h4>
              <p className="text-gray-600 dark:text-gray-400">Completed</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="font-bold text-blue-500 text-lg mb-2">3+</h4>
              <p className="text-gray-600 dark:text-gray-400">Certifications</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h4 className="font-bold text-blue-500 text-lg mb-2">6+ Skills</h4>
              <p className="text-gray-600 dark:text-gray-400">Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;