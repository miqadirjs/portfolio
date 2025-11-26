import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cpu, Megaphone, Smartphone, Globe, Code, Layers, Layout, PenTool, Zap } from 'lucide-react';

const SKILLS = [
  {
    name: "AI Generated Websites",
    icon: <Cpu size={24} />,
    color: "text-purple-400"
  },
  {
    name: "Figma",
    icon: (
      <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M7.5 15C9.57107 15 11.25 13.3211 11.25 11.25V3.75C11.25 1.67893 9.57107 0 7.5 0C5.42893 0 3.75 1.67893 3.75 3.75C3.75 5.82107 5.42893 7.5 7.5 7.5C5.42893 7.5 3.75 9.17893 3.75 11.25C3.75 13.3211 5.42893 15 7.5 15Z" fill="#F24E1E"/>
        <path d="M7.5 0C9.57107 0 11.25 1.67893 11.25 3.75V7.5H7.5C5.42893 7.5 3.75 5.82107 3.75 3.75C3.75 1.67893 5.42893 0 7.5 0Z" fill="#A259FF"/>
        <path d="M3.75 3.75C3.75 5.82107 5.42893 7.5 7.5 7.5V11.25C7.5 13.3211 5.42893 15 3.75 15V3.75Z" fill="#1ABCFE"/>
        <path d="M7.5 7.5H11.25V11.25C11.25 13.3211 9.57107 15 7.5 15V7.5Z" fill="#0ACF83"/>
        <circle cx="7.5" cy="3.75" r="3.75" fill="#FF7262"/>
      </svg>
    ),
    color: "text-red-400"
  },
  {
    name: "Adobe XD",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current">
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
        <path d="M6 8V16M6 12H10M10 8V16" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 8V16C14 16 14 16 18 12M14 8C14 8 14 8 18 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "text-pink-600"
  },
  {
    name: "WordPress",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93l-3.3-9.46H6.5l4.57 12.57c-.36-.06-.72-.14-1.07-.24zm8.7-3.23c-1.28 1.63-3.14 2.8-5.3 3.2L18.7 8.6c.1.7.17 1.4.17 2.1 0 2.2-.8 4.2-2.17 5.8zM12 4c1.7 0 3.3.56 4.6 1.5L12 17.6 7.4 5.5C8.8 4.56 10.4 4 12 4z"/>
      </svg>
    ),
    color: "text-blue-400"
  },
  {
    name: "Bootstrap",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    color: "text-violet-500"
  },
  {
    name: "HTML 5",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h20l-2 18L12 22 4 21 2 3z"/>
        <path d="M17 7H7l1 10 4 1 4-1 .5-4H9"/>
      </svg>
    ),
    color: "text-orange-500"
  },
  {
    name: "CSS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h20l-2 18L12 22 4 21 2 3z"/>
        <path d="M17 7H7l1 10 4 1 4-1 .5-4H9"/>
      </svg>
    ),
    color: "text-blue-500"
  },
  {
    name: "React JS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2C7 2 2.5 5 2.5 12S7 22 12 22s9.5-3 9.5-10S17 2 12 2z" opacity="0.5"/>
        <path d="M2.5 12c0-4 3.5-9 9.5-9s9.5 5 9.5 9-3.5 9-9.5 9-9.5-5-9.5-9z" transform="rotate(60 12 12)"/>
        <path d="M2.5 12c0-4 3.5-9 9.5-9s9.5 5 9.5 9-3.5 9-9.5 9-9.5-5-9.5-9z" transform="rotate(-60 12 12)"/>
      </svg>
    ),
    color: "text-cyan-400"
  },
  {
    name: "Wix",
    icon: <Layout size={24} />,
    color: "text-yellow-400"
  },
  {
    name: "Webflow",
    icon: <Zap size={24} />,
    color: "text-blue-600"
  },
  {
    name: "Digital Marketing",
    icon: <Megaphone size={24} />,
    color: "text-green-400"
  },
];

const SkillsMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Infinite Marquee Animation
      const tl = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 25, // Adjust speed here
        repeat: -1,
      });

      // Interactive Hover Effects
      const items = gsap.utils.toArray<HTMLElement>('.skill-item');
      
      items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(tl, { timeScale: 0, duration: 0.5, overwrite: true }); // Pause marquee
          gsap.to(item, { 
            scale: 1.1, 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            duration: 0.3 
          });
          gsap.to(items.filter(i => i !== item), { 
            opacity: 0.3, 
            scale: 0.95,
            duration: 0.3 
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(tl, { timeScale: 1, duration: 0.5, overwrite: true }); // Resume marquee
          gsap.to(item, { 
            scale: 1, 
            backgroundColor: 'transparent',
            duration: 0.3 
          });
          gsap.to(items, { 
            opacity: 1, 
            scale: 1,
            duration: 0.3 
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full py-12 bg-neutral-900/50 border-y border-white/5 overflow-hidden relative z-20 backdrop-blur-sm">
      <div 
        ref={trackRef} 
        className="flex gap-8 w-fit px-4"
      >
        {/* Render items twice for seamless loop */}
        {[...SKILLS, ...SKILLS].map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`}
            className="skill-item flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-neutral-400 cursor-default transition-colors hover:text-white hover:border-white/30 bg-[#050505]"
          >
            <span className={`${skill.color} transition-colors duration-300`}>
              {skill.icon}
            </span>
            <span className="font-display font-bold text-lg tracking-wide uppercase">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
