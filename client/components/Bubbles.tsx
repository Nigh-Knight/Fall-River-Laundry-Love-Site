import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated: Bubble[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 40 + 10,
      delay: Math.random() * 3,
      duration: Math.random() * 4 + 4,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden bubble-container">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bubble-float"
          style={{
            left: `${b.x}%`,
            bottom: "-60px",
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: 0,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(0,114,213,${b.opacity}))`,
            boxShadow: `inset -2px -2px 6px rgba(0,114,213,0.15), inset 2px 2px 6px rgba(255,255,255,0.6), 0 0 ${b.size / 3}px rgba(0,114,213,0.1)`,
          }}
        />
      ))}
    </div>
  );
}
