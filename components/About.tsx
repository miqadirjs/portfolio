import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Highlight text animation on scroll
      gsap.from(".about-word", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        opacity: 0.1,
        stagger: 0.1,
        color: "#525252"
      });

      // Skill bars animation
      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bio = "I'm Muhammad Imtiaz Qadir , an UI/UX Designer, I’m an UI/UX designer based in Karachi, PK with 12+ experience in delivering end-to-end UX/UI design for software products. I’m passionate about improving the lives of others through design and I’m constantly looking to learn new things everyday..";
  const words = bio.split(" ");

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-white text-dark rounded-t-[3rem] -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Bio Column */}
          <div>
            <span className="block text-sm font-mono tracking-widest uppercase mb-8 text-neutral-500">01 / About</span>
            <p ref={textRef} className="text-3xl md:text-5xl font-medium leading-tight flex flex-wrap gap-x-3 gap-y-1">
              {words.map((word, i) => (
                <span key={i} className="about-word opacity-100 transition-colors duration-300">
                  {word}
                </span>
              ))}
            </p>
          </div>

          {/* Skills Column */}
          <div className="skills-container flex flex-col justify-end">
             <h3 className="text-xl font-display font-bold mb-8">Tech Stack</h3>
             <div className="space-y-6">
               {SKILLS.map((skill) => (
                 <div key={skill.name} className="skill-item">
                   <div className="flex justify-between mb-2 text-sm font-semibold tracking-wide">
                     <span>{skill.name}</span>
                     <span>{skill.level}%</span>
                   </div>
                   <div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-black rounded-full" 
                       style={{ width: `${skill.level}%` }}
                     />
                   </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;