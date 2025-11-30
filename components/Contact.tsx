import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SOCIALS } from '../constants';
import { Mail, MapPin, ArrowRight, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-white text-dark rounded-t-[3rem] -mt-10 relative z-30 min-h-[80vh] flex flex-col justify-between">
      
      <div className="max-w-7xl mx-auto w-full mb-12">
        <div className="mb-20">
          <span className="block text-sm font-mono tracking-widest uppercase mb-8 text-neutral-500">05 / Contact</span>
          <h2 className="contact-reveal font-display text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-12">
            LET'S WORK<br/>TOGETHER
          </h2>
          <div className="contact-reveal w-full h-[1px] bg-neutral-200 mb-12" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-16">
            <div className="contact-reveal space-y-8">
              <p className="text-xl text-neutral-600 max-w-md leading-relaxed">
                Have a project in mind? I'm always looking for new challenges and opportunities to create something unique.
              </p>
              
              <a 
                href="mailto:hello@miqadir.dev" 
                className="group flex items-center gap-4 text-2xl md:text-3xl font-medium hover:opacity-60 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                imme.pk@gmail.com
              </a>
              
              <div className="flex items-center gap-4 text-lg text-neutral-600">
                <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span>Remote / Available Worldwide</span>
              </div>
            </div>

            <div className="contact-reveal grid grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
              <div>
                <h4 className="font-bold text-sm tracking-widest uppercase mb-6">SOCIALS</h4>
                <ul className="space-y-4 text-neutral-600">
                  {SOCIALS.map(social => (
                    <li key={social.name}>
                      <a href={social.url} className="hover:text-black flex items-center gap-2 group transition-colors">
                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {social.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-widest uppercase mb-6">SERVICES</h4>
                <ul className="space-y-4 text-neutral-600">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Motion Graphics</li>
                  <li>Consulting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-reveal bg-neutral-50 p-8 md:p-12 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-lg focus:outline-none focus:border-black transition-colors placeholder-transparent" 
                    placeholder="Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 -top-3.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-neutral-800"
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-lg focus:outline-none focus:border-black transition-colors placeholder-transparent" 
                    placeholder="Email"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-neutral-800"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-lg focus:outline-none focus:border-black transition-colors placeholder-transparent resize-none" 
                    placeholder="Message"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-3.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-neutral-800"
                  >
                    Tell me about your project
                  </label>
                </div>
              </div>

              <button className="group w-full bg-black text-white py-4 rounded-full font-bold tracking-wide hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2">
                <span>SEND MESSAGE</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="contact-reveal max-w-7xl mx-auto w-full pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 font-mono">
        <p>© 2024 MIQADIR. All Rights Reserved.</p>
        <p className="flex items-center gap-2">
          Designed & Developed by Miqadir
        </p>
      </div>

    </section>
  );
};

export default Contact;