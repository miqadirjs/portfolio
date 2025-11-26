import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'mobile',
    label: 'Mobile App',
    description: 'Native & Cross-platform solutions for iOS and Android',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'webapp',
    label: 'Web App',
    description: 'Scalable SaaS & Cloud Applications built for performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    id: 'website',
    label: 'Website and Landing pages',
    description: 'High-converting marketing sites with immersive interactions',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ai-web',
    label: 'AI generated Website',
    description: 'Next-gen automated web experiences powered by AI',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop'
  }
];

const WorkShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Animation when category changes
  useEffect(() => {
    if (imageRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(imageRef.current,
        { scale: 1.1, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [activeCategory]);

  return (
    <section className="w-full py-24 bg-dark text-white relative z-20 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24">
            <h2 className="font-display text-4xl md:text-8xl font-bold tracking-tighter">
                MY WORKS
            </h2>
            <div className="h-1 w-full bg-white/10 mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Side: Buttons List */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onMouseEnter={() => setActiveCategory(category)}
                onClick={() => setActiveCategory(category)}
                className={`group text-left py-8 px-4 md:px-8 border-l-2 transition-all duration-300 ease-out flex flex-col ${
                  activeCategory.id === category.id
                    ? 'border-white bg-white/5'
                    : 'border-white/10 hover:border-white/50 hover:bg-white/5'
                }`}
              >
                <span className={`font-display text-xl md:text-3xl font-bold mb-3 transition-colors ${
                    activeCategory.id === category.id ? 'text-white' : 'text-neutral-500 group-hover:text-white'
                }`}>
                    {category.label}
                </span>
                <span className={`text-sm tracking-wide transition-colors ${
                    activeCategory.id === category.id ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                    {category.description}
                </span>
              </button>
            ))}
          </div>

          {/* Right Side: Image Display */}
          <div className="lg:col-span-8 h-[50vh] lg:h-[70vh] relative">
            <div 
                ref={imageContainerRef}
                className="w-full h-full rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl"
            >
                <div className="absolute inset-0 bg-neutral-900 animate-pulse z-0" />
                <img
                    ref={imageRef}
                    key={activeCategory.image} 
                    src={activeCategory.image}
                    alt={activeCategory.label}
                    className="w-full h-full object-cover relative z-10"
                />
                
                {/* Overlay Text/UI on image */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 md:p-12 z-20 flex justify-between items-end">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{activeCategory.label}</h3>
                        <p className="text-neutral-300 text-sm">View Projects Gallery</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-110">
                        <ArrowUpRight size={24} />
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;