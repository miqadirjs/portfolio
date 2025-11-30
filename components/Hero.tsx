import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Download, Briefcase, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cvButtonRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text Reveal Animation
      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      })
      .from(subTextRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .from(cvButtonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(cardRef.current, {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(".scroll-indicator", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Vertical Marquee for Responsibilities
      const scroller = scrollerRef.current;
      if (scroller) {
        // Calculate the height of one set of content
        // We assume the content is duplicated for seamless looping
        const contentHeight = scroller.offsetHeight / 2;
        
        gsap.to(scroller, {
          y: -contentHeight,
          duration: 40, // Slow, readable speed
          ease: "none",
          repeat: -1
        });

        // Pause on hover
        const card = cardRef.current;
        if (card) {
            card.addEventListener('mouseenter', () => gsap.globalTimeline.timeScale(0.2)); // Slow down instead of full pause for smoother feel
            card.addEventListener('mouseleave', () => gsap.globalTimeline.timeScale(1));
        }
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const responsibilities = [

        "Design user interface elements for desktop, web, and mobile applications.",
        "Create visually appealing designs and graphic user interface elements including menus, tabs, forms, widgets, and pages.",
        "Designing user interface layouts, prototypes, and visual assets.",
        "Developing and maintaining design guidelines, style guides, and asset libraries.",
        "Creating high-fidelity mockups, animations, and interactive prototypes.",
        "Conducting usability testing to identify and address UI issues.",
        "Collaborating with developers to ensure a consistent user experience.",
        "Staying up-to-date with UI and UX trends.",
        "Design and develop user interface elements for websites, web applications, and mobile applications"
  ];

  const contentBlock = (
    <div className="space-y-6 pb-8">
        <p className="text-sm text-neutral-400 leading-relaxed">
            My responsibility for creating and maintaining the visual elements of a user interface, such as buttons, menus, icons, and other visual elements during the user experience design principles, including usability and accessibility, to create a user-friendly interface. Also be familiar with design tools, such as Adobe Creative Suite, Figma and be able to write and read HTML and CSS. Additionally, UI Designers must be able to work closely with developers to ensure that the design is correctly implemented.
        </p>
        <ul className="space-y-4">
            {responsibilities.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-neutral-300">
                    <CheckCircle2 size={16} className="text-white mt-0.5 shrink-0 opacity-60" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
  );

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      {/* Background Abstract Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/50 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-7xl w-full mx-auto z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 ref={textRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
            <div className="overflow-hidden">
              <span className="hero-line block">CREATIVE</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                DEVELOPER
              </span>
            </div>
          </h1>

          <p ref={subTextRef} className="text-neutral-400 max-w-lg text-lg leading-relaxed mb-10 lg:mb-12">
            Crafting immersive digital experiences through code, motion, and minimalist design. Based in the digital void.
          </p>

          <div ref={cvButtonRef}>
            <a 
              href="/resume.pdf" 
              download="Miqadir_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 group cursor-pointer backdrop-blur-sm"
            >
              <span className="font-bold tracking-widest text-sm">DOWNLOAD CV</span>
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Content - Job Responsibilities Scrolling Card */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div 
            ref={cardRef} 
            className="bg-[#0A0A0A] border border-white/10 p-1 rounded-3xl w-full max-w-md shadow-2xl relative h-[500px] overflow-hidden group"
          >
            {/* Inner Content Container */}
            <div className="bg-[#050505] w-full h-full rounded-[20px] p-6 md:p-8 flex flex-col relative overflow-hidden">
                
                {/* Header */}
                <div className="relative z-20 bg-[#050505] pb-4 border-b border-white/5 mb-4 shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <Briefcase size={20} />
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-lg text-white tracking-wide">CURRENT ROLE</h3>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Active</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-neutral-300 font-medium">Sr UX/UI Designer <span className="text-neutral-600">@</span> Alta Tech Mark</p>
                    <p className="text-xs text-neutral-500 mt-1">May, 2025 - Working</p>
                </div>

                {/* Scrolling Content Area */}
                <div className="relative z-10 flex-1 overflow-hidden">
                     {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none"></div>

                    <div ref={scrollerRef} className="will-change-transform">
                        {contentBlock}
                        {/* Duplicate content for seamless loop */}
                        {contentBlock}
                    </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-[60px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Absolute Bottom */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs font-mono text-neutral-600 uppercase tracking-widest pointer-events-none">
        <span>Scroll to Explore</span>
        <div className="w-6 h-6 rounded-full border border-neutral-800 flex items-center justify-center animate-bounce">
          <ArrowDown size={12} />
        </div>
      </div>
    </section>
  );
};

export default Hero;