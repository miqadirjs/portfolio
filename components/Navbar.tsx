import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      gsap.fromTo('.mobile-nav-link', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(menuRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' });
    }
  }, [isOpen]);

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECT', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-[60] mix-blend-difference text-white">
        <div className="font-display font-bold text-xl tracking-tighter relative z-[60]">
          MIQADIR<span className="text-neutral-500">.DEV</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {links.map(link => (
            <a key={link.name} href={link.href} className="hover:opacity-60 transition-opacity">{link.name}</a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[60] text-white uppercase text-xs font-bold tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className="fixed inset-0 bg-neutral-950 z-50 transform translate-x-full md:hidden flex flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-8 text-center">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="mobile-nav-link text-4xl font-display font-bold text-white hover:text-neutral-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="absolute bottom-12 text-neutral-500 text-xs tracking-widest uppercase">
          © 2024 Miqadir
        </div>
      </div>
    </>
  );
};

export default Navbar;