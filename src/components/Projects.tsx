import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Calculator Web App',
      description: 'A functional calculator built using HTML, CSS, and JavaScript with a responsive layout and interactive button clicks.',
      image: 'https://images.pexels.com/photos/6980429/pexels-photo-6980429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Quiz Application',
      description: 'A platform for creating and attempting quizzes, storing scores in a database. Features user authentication and result tracking.',
      image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL'],
      demoLink: '#',
      codeLink: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Personal Blog',
      description: 'A responsive blog website with article categorization and a comment system.',
      image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather application that fetches real-time data and displays forecasts with a clean interface.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      demoLink: '#',
      codeLink: '#',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each project represents my problem-solving approach
            and technical skills.
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'featured'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </a>
                  )}
                  
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;