import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;