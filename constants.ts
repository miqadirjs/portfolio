import { Project, Skill, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Lumina Interface",
    category: "UI/UX Design",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276265/xacf0g5xszzv8bz73uqu.jpg",
    year: "2024",
    description: "A comprehensive design system for a fintech startup, focusing on clarity and dark-mode aesthetics."
  },
  {
    id: 2,
    title: "Apex Architecture",
    category: "Web Development",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276266/xvqb3swdpfdgaz5jb3cp.jpg",
    year: "2023",
    description: "Minimalist portfolio website for an architectural firm featuring WebGL 3D visualizations."
  },
  {
    id: 3,
    title: "Neon Commerce",
    category: "E-Commerce",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276266/uxcmsnfutoradb4zyxhx.jpg",
    year: "2023",
    description: "High-performance headless Shopify store with custom animations and fluid transitions."
  },
  {
    id: 4,
    title: "Echo AI",
    category: "Product Design",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276265/xclybrswb705qqi3zlhz.jpg",
    year: "2024",
    description: "Dashboard interface for an AI-powered analytics tool."
  },
   {
    id: 4,
    title: "Echo AI",
    category: "Product Design",
    image: "https://res.cloudinary.com/dfatwlbay/image/upload/v1764276265/to8fau65jos1g4ryescs.jpg",
    year: "2024",
    description: "Dashboard interface for an AI-powered analytics tool."
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "GSAP", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Three.js", level: 70 },
  { name: "Design", level: 85 },
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
];