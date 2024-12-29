import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const NetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: { x: number; y: number; radius: number }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(172, 255, 0, 0.8)";
        ctx.fill();
        particle.x += Math.random() * 2 - 1;
        particle.y += Math.random() * 2 - 1;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative min-h-screen bg-dark-lighter overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="text-primary">The Ever Evolving Network</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          For Unprecedented Value
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-gray-400 text-lg"
        >
          Our network of autonomous AI agents continuously grows and evolves,
          working together to generate and maximize value for token holders
        </motion.p>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </section>
  );
};
