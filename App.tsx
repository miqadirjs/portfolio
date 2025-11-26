import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import WorkShowcase from './components/WorkShowcase';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import SkillsMarquee from './components/SkillsMarquee';
import Experience from './components/Experience';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <div className="bg-dark text-light selection:bg-white selection:text-black">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <div className="relative">
          {/* Creating layering effect with negative margins in components */}
          <About />
          <Experience />
          <Education />
          <Projects />
          <WorkShowcase />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;