import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const phrases = ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast', 'Problem Solver'];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentPhrase.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentPhrase.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 150;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    const timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-accent-100/30 dark:from-primary-900/30 dark:to-accent-900/30"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-primary-600 dark:text-primary-400 font-medium mb-4">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Chada Jayasen Reddy
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium flex items-center justify-center">
              I'm a <span ref={typewriterRef} className="text-primary-600 dark:text-primary-400 ml-2"></span>
              <span className="animate-blink ml-1">|</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly websites.
            Skilled in modern web technologies and committed to writing clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg shadow-primary-600/20"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-medium transition-colors duration-300 shadow-lg"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:chadajayasenareddy123@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-600 dark:text-primary-400"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;