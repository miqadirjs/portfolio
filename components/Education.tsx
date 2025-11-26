import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white text-dark relative z-20 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
             <span className="edu-reveal block text-sm font-mono tracking-widest uppercase mb-4 text-neutral-500">03 / Qualifications</span>
             <h2 className="edu-reveal font-display text-4xl md:text-6xl font-bold tracking-tighter">EDUCATION &<br/>CERTIFICATIONS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Education Block */}
            <div className="edu-reveal space-y-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Education</h3>
                </div>
                
                <div className="group bg-neutral-50 border border-neutral-100 p-8 rounded-3xl hover:border-neutral-300 transition-colors h-full">
                    <h4 className="text-xl font-bold mb-2">Bachelor Degree</h4>
                    <p className="text-neutral-500 font-mono text-sm uppercase tracking-wider mb-6">Bachelor of Arts / 2009 - 2011</p>
                    <div className="w-12 h-1 bg-neutral-200 rounded-full group-hover:w-20 group-hover:bg-black transition-all duration-300"></div>
                </div>
            </div>

            {/* Courses Block */}
            <div className="edu-reveal space-y-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                        <Award size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Courses</h3>
                </div>

                <div className="group bg-neutral-50 border border-neutral-100 p-8 rounded-3xl hover:border-neutral-300 transition-colors h-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">Courses From Google Coursera</span>
                    </div>
                    <h4 className="text-xl font-bold mb-6">Foundations of User Experience (UX) Design</h4>
                    
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-neutral-600">
                             <CheckCircle2 size={18} className="mt-1 shrink-0 text-black opacity-60" />
                             <span>Start the UX Design Process: Empathize, Define, and Ideate</span>
                        </li>
                        <li className="flex gap-3 text-neutral-600">
                             <Award size={18} className="mt-1 shrink-0 text-black opacity-60" />
                             <span>Course Certificate for Build Wireframes and Low-Fidelity Prototypes</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;