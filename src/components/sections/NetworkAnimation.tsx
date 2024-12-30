import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const NetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: { x: number; y: number; dx: number; dy: number; size: number; color: string }[] = [];
    const particleCount = 70;
    const connectionDistance = 200;
    const colors = ['#ACFF00', '#00F0FF'];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 11, 0.1)';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off walls with smooth transition
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.dx *= -1;
          particle.dx *= 0.99; // Add slight dampening
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.dy *= -1;
          particle.dy *= 0.99; // Add slight dampening
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.forEach((particle2, j) => {
          if (i !== j) {
            const dx = particle.x - particle2.x;
            const dy = particle.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              const opacity = (1 - distance / connectionDistance) * 0.5;
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y, particle2.x, particle2.y
              );
              gradient.addColorStop(0, `${particle.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
              gradient.addColorStop(1, `${particle2.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
              
              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 2;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [dimensions]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-dark overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#0A0A0B" }}
      />

      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.h2 
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold"
          >
            The <span className="gradient-text">Future</span> of
            <br />
            <span className="gradient-text">Autonomous Value</span>
          </motion.h2>
          
          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed"
          >
            Our network of AI agents continuously evolves and adapts,
            working in harmony to discover and create unprecedented value
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};