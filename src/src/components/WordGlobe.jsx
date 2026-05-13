import { useEffect, useRef } from 'react';

const WORDS = [
  'Structure', 'Blueprint', 'Vision', 'Space', 'Form', 'Volume',
  'Facade', 'Tension', 'Grid', 'Symmetry', 'Void', 'Arch',
  'Cantilever', 'Threshold', 'Scale', 'Light', 'Shadow', 'Core'
];

export default function WordGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Simple rotation logic for the words
    let angle = 0;
    const animate = () => {
      angle += 0.005;
      const wordEls = container.querySelectorAll('.gw');
      wordEls.forEach((el, i) => {
        const ratio = i / WORDS.length;
        const x = Math.cos(angle + ratio * Math.PI * 2) * 150;
        const z = Math.sin(angle + ratio * Math.PI * 2) * 150;
        const opacity = (z + 150) / 300;
        el.style.transform = `translate(${x}px, ${Math.sin(ratio * Math.PI) * 100}px)`;
        el.style.opacity = 0.2 + opacity * 0.8;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div ref={containerRef} className="relative w-[300px] h-[300px] flex items-center justify-center">
      {WORDS.map((word, i) => (
        <span key={i} className="gw absolute font-inter text-blueprint-blue font-bold tracking-widest text-xs">
          {word}
        </span>
      ))}
    </div>
  );
}
