import { Project, Skill, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Lumina Interface",
    category: "UI/UX Design",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764506673/tto5ikdxlsy3jlvb3h0w.jpg",
    year: "2024",
    description: "A comprehensive design system for a fintech startup, focusing on clarity and dark-mode aesthetics.",
    link: "https://yourwebsite.com/lumina-interface"
  },
  {
    id: 2,
    title: "Apex Architecture",
    category: "Web Development",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276266/xvqb3swdpfdgaz5jb3cp.jpg",
    year: "2023",
    description: "Minimalist portfolio website for an architectural firm featuring WebGL 3D visualizations.",
    // link: "https://yourwebsite.com/my-big-boss"
  },
  {
    id: 3,
    title: "Neon Commerce",
    category: "E-Commerce",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276266/uxcmsnfutoradb4zyxhx.jpg",
    year: "2023",
    description: "High-performance headless Shopify store with custom animations and fluid transitions.",
    // link: "https://yourwebsite.com/neon-commerce"
  },
  {
    id: 4,
    title: "Echo AI",
    category: "Product Design",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276265/xclybrswb705qqi3zlhz.jpg",
    year: "2024",
    description: "Dashboard interface for an AI-powered analytics tool.",
    // link: "https://yourwebsite.com/echo-ai"
  },
  {
    id: 5,
    title: "Echo AI — Variant",
    category: "Product Design",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276265/to8fau65jos1g4ryescs.jpg",
    year: "2024",
    description: "Dashboard interface for an AI-powered analytics tool.",
    // link: "https://yourwebsite.com/echo-ai-v2"
  }
];

export const SKILLS: Skill[] = [
  { name: "Figma", level: 85 },
  { name: "Adobe XD", level: 85 },
  { name: "WordPress / Custome WP", level: 90 },
  { name: "HTML/CSS", level: 95 },
  { name: "React", level: 50 },
  { name: "TypeScript", level: 50 },
  { name: "Web Flow", level: 85 },
  { name: "Wix", level: 85 }
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/miqadirjs" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/miqadir/" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "https://www.instagram.com/designbyqadir/" }
];