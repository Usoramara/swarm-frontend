import { Hexagon } from "lucide-react";
import { motion } from "framer-motion";

interface NetworkNodeProps {
  position: { x: number; y: number };
  size: number;
  color: string;
  delay: number;
  rotate?: boolean;
  duration?: number;
  pulse?: boolean;
}

export const NetworkNode = ({ 
  position, 
  size, 
  color, 
  delay, 
  rotate = false,
  duration = 20,
  pulse = false 
}: NetworkNodeProps) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      whileInView={{ 
        x: position.x, 
        y: position.y, 
        scale: 1, 
        opacity: 1 
      }}
      transition={{ 
        delay, 
        duration: 1, 
        type: "spring", 
        stiffness: 60 
      }}
    >
      <motion.div
        animate={rotate ? { rotate: [0, 360] } : {}}
        transition={{ 
          duration, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Hexagon 
          className={`w-${size} h-${size} ${color} ${pulse ? 'animate-pulse' : ''}`} 
        />
      </motion.div>
    </motion.div>
  );
};