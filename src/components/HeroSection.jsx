import { motion } from 'framer-motion';
import StarField from './StarField';
import WordGlobe from './WordGlobe';

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#050508' }}>
      <StarField />
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-16">
        <div className="flex-1 max-w-xl">
          <motion.h1 
            className="font-dotgothic text-white" 
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hey,<br /> I'm <span style={{ WebkitTextStroke: '1px #4FC3F7' }}>Yusuf</span>
          </motion.h1>
          <p className="text-zinc-400 mt-4">Digital Architect building bespoke websites for architects.</p>
          <button onClick={() => scrollTo('contact')} className="mt-8 px-8 py-3 bg-blueprint-blue text-obsidian uppercase font-bold">
            Start a Project
          </button>
        </div>
        <WordGlobe />
      </div>
    </section>
  );
}
