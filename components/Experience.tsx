import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".exp-header-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      });

      // Experience Cards Animation
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1, // Stagger cards slightly
          ease: "power3.out"
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: "Sr UX/UI Designer",
      company: "Alta Tech Mark",
      period: "May, 2023 - Working",
      description: "My responsibility for creating and maintaining the visual elements of a user interface, such as buttons, menus, icons, and other visual elements. during the user experience design principles, including usability and accessibility, to create a user-friendly interface. Also be familiar with design tools, such as Adobe Creative Suite, Figma and be able to write and read HTML and CSS. Additionally, UI Designers must be able to work closely with developers to ensure that the design is correctly implemented.",
      responsibilities: [
        "Design user interface elements for desktop, web, and mobile applications.",
        "Create visually appealing designs and graphic user interface elements including menus, tabs, forms, widgets, and pages.",
        "Designing user interface layouts, prototypes, and visual assets.",
        "Developing and maintaining design guidelines, style guides, and asset libraries.",
        "Creating high-fidelity mockups, animations, and interactive prototypes.",
        "Conducting usability testing to identify and address UI issues.",
        "Collaborating with developers to ensure a consistent user experience.",
        "Staying up-to-date with UI and UX trends.",
        "Design and develop user interface elements for websites, web applications, and mobile applications"
      ]
      
    },

    {
      title: "Sr UX/UI Designer",
      company: "Binatedigital",
      period: "Aug 2023 - May 2025",
      description: "My responsibility for creating and maintaining the visual elements of a user interface",
      responsibilities: [
        "Designing intuitive and user-friendly interfaces for web and mobile applications.",
        "Conducting user research and usability testing to enhance user experience.",
        "Creating wireframes, prototypes, and high-fidelity designs.",
        "Collaborating with developers, product managers, and stakeholders to ensure seamless execution of design concepts.",
        "Creating high-fidelity mockups, animations, and interactive prototypes.",
        "Conducting usability testing to identify and address UI issues.",
        "Collaborating with developers to ensure a consistent user experience.",
        "Staying up-to-date with UI and UX trends.",
        "Design and develop user interface elements for websites, web applications, and mobile applications."
      ]
    },
    {
      title: "Sr UX/UI Designer",
      company: "Mid Construction Group - USA ( Remote )",
      period: "April 2024 - Feb 2025",
      description: "My responsibility for creating and maintaining the visual elements of a user interface",
      responsibilities: [
        "Designing intuitive and user-friendly interfaces for web and mobile applications.",
        "Conducting user research and usability testing to enhance user experience.",
        "Creating wireframes, prototypes, and high-fidelity designs.",
        "Collaborating with developers, product managers, and stakeholders to ensure seamless execution of design concepts.",
        "Creating high-fidelity mockups, animations, and interactive prototypes.",
        "Conducting usability testing to identify and address UI issues.",
        "Collaborating with developers to ensure a consistent user experience.",
        "Staying up-to-date with UI and UX trends.",
        "Design and develop user interface elements for websites, web applications, and mobile applications."
      ]
    },
    {title: "Sr UX/UI Designer",
      company: "Jumppace",
      period: "Jan 2023 - Aug 2023",
      description: "My responsibility for creating and maintaining the visual elements of a user interface, such as buttons, menus, icons, and other visual elements. during the user experience design principles, including usability and accessibility, to create a user-friendly interface. Also be familiar with design tools, such as Adobe Creative Suite, Figma and be able to write and read HTML and CSS. Additionally, UI Designers must be able to work closely with developers to ensure that the design is correctly implemented.",
      responsibilities: [
        "Design user interface elements for desktop, web, and mobile applications.",
        "Create visually appealing designs and graphic user interface elements including menus, tabs, forms, widgets, and pages.",
        "Designing user interface layouts, prototypes, and visual assets.",
        "Developing and maintaining design guidelines, style guides, and asset libraries.",
        "Creating high-fidelity mockups, animations, and interactive prototypes.",
        "Conducting usability testing to identify and address UI issues.",
        "Collaborating with developers to ensure a consistent user experience.",
        "Staying up-to-date with UI and UX trends.",
        "Design and develop user interface elements for websites, web applications, and mobile applications."
      ]
    },
    {title: "UI/UX Designer & Front end Developer",
      company: "DigiTrends",
      period: "Nov, 2021 - May 2023",
      description: "My responsibility for creating and maintaining the visual elements of a user interface, such as buttons, menus, icons, and other visual elements. during the user experience design principles, including usability and accessibility, to create a user-friendly interface. Also be familiar with design tools, such as Adobe Creative Suite, Figma and be able to write and read HTML and CSS. Additionally, UI Designers must be able to work closely with developers to ensure that the design is correctly implemented.",
      responsibilities: [
        "Design user interface elements for desktop, web, and mobile applications.",
        "Create visually appealing designs and graphic user interface elements including menus, tabs, forms, widgets, and pages.",
        "Designing user interface layouts, prototypes, and visual assets.",
        "Developing and maintaining design guidelines, style guides, and asset libraries.",
        "Creating high-fidelity mockups, animations, and interactive prototypes.",
        "Conducting usability testing to identify and address UI issues.",
        "Collaborating with developers to ensure a consistent user experience.",
        "Staying up-to-date with UI and UX trends.",
        "Design and develop user interface elements for websites, web applications, and mobile applications."
      ]
    },
    {title: "UI/UX Designer & front end Developer",
      company: "PatientGain (Digital Marketing Agency) ( Remote ) ( USA )",
      period: "Jan, 2014 - Sep, 2021",
      description: "My Responsibility are encompasses a wide range of tasks, including creating Develop Website HTML and Wordpress and managing content, developing and maintaining a website, designing and executing campaigns, analyzing data and trends, managing social media accounts, and optimizing online advertising.",
      responsibilities: [
        "Develop and implement strategies to increase website traffic, improve search engine rankings, and drive sales",
        "Execute campaigns across multiple channels, including email, search, display, and social media.",
        "Monitor and analyze data to measure the success of campaigns and make adjustments to improve results.",
        "Track and monitor customer trends, behaviors, and preferences",
        "Develop relationships with influencers to increase brand awareness and engagement.",
        "Stay up-to-date on the latest digital marketing strategies and trends",
        "Collaborate with other departments to create content, campaigns, and strategies.",
        "Identify new opportunities to reach customers and increase sales.",
       
      ]
    },
    {title: "Web Designer",
      company: "InfiniLogic",
      period: "Jan 2009 - Dec 2014",
      description: "My responsibility for designing and creating websites. This includes the look, layout and coding of a website or maintaining and updating the website when necessary. I have an understanding of aesthetics and a knowledge of both graphic design and Coding. I work with a variety of web technologies, such as HTML, CSS, JavaScript and WordPress for ensuring that the website is optimized for all devices, including mobile phones and tablets.",
      responsibilities: [
        "Developing website navigation and structure.",
        "Designing visually attractive interfaces.",
        "Writing HTML, CSS and JavaScript code.",
        "Integrating graphics, audio and video into websites.",
        "Optimizing website for maximum speed and scalability.",
        "Ensuring cross-browser compatibility.",
        "Collaborating with other web specialists such as web developers and graphic designers",
        "EDeveloping and maintaining WordPress websites.",
        "Testing and debugging websites to ensure functionality and compatibility.",
       
      ]
    }         
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-white text-dark relative z-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-50 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-neutral-100 pb-12">
          <div>
            <span className="block text-sm font-mono tracking-widest uppercase mb-4 text-neutral-500">02 / Experience</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] overflow-hidden">
              <span className="exp-header-reveal block">WORK</span>
              <span className="exp-header-reveal block text-neutral-400">HISTORY</span>
            </h2>
          </div>
          <div className="md:max-w-md">
            <p className="exp-header-reveal text-neutral-600 leading-relaxed">
              A timeline of my professional journey, crafting digital experiences and solving complex design challenges.
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card group bg-neutral-50 border border-neutral-100 rounded-[2rem] p-8 md:p-10 hover:border-neutral-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between mb-8">
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl md:text-4xl font-bold group-hover:text-black transition-colors">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-neutral-600 font-medium text-lg">
                      <div className="flex items-center gap-2">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                      <span className="hidden md:block w-1 h-1 bg-neutral-400 rounded-full"></span>
                      <div className="flex items-center gap-2 text-neutral-500">
                        <Calendar size={18} />
                        <span className="font-mono text-sm uppercase tracking-wider">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="shrink-0">
                     <div className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        <ArrowUpRight size={24} />
                     </div>
                  </div>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-10 text-lg max-w-4xl border-l-2 border-neutral-200 pl-6">
                  {exp.description}
                </p>

                <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-100">
                  <h4 className="font-bold text-xs tracking-widest uppercase text-neutral-400 mb-6 flex items-center gap-2">
                      Key Responsibilities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 size={16} className="mt-1 text-black shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                              <span className="text-sm text-neutral-600 leading-relaxed">{resp}</span>
                          </div>
                      ))}
                  </div>
                </div>

              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;