import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray<HTMLElement>('.project-card');

      projects.forEach((project, i) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-dark text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <h2 className="font-display text-4xl md:text-7xl font-bold">SELECTED<br/>WORKS</h2>
          <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest mt-4 md:mt-0">04 / Portfolio</span>
        </div>

        <div ref={projectsRef} className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="project-card group relative">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                
                {/* Image Section */}
                <div className="md:col-span-7 relative overflow-hidden rounded-lg aspect-video">
                  <div className="absolute inset-0 bg-neutral-900 z-10 opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Text Info Section */}
                <div className="md:col-span-5 flex flex-col justify-center h-full">
                  <div className="border-b border-neutral-800 pb-6 mb-6">
                    <span className="text-neutral-500 font-mono text-sm mb-2 block">{project.year} — {project.category}</span>
                    <h3 className="text-3xl md:text-4xl font-bold font-display group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-neutral-400 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <a href={project.link} className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all duration-300 group-hover:text-neutral-200">
                    VIEW CASE STUDY <ArrowUpRight size={18} />
                  </a>

      
                </div>

              </div>
              
              {/* Background Index Number */}
              <span className="absolute -top-12 -left-4 md:-left-12 text-9xl font-display font-bold text-neutral-900 -z-10 select-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;