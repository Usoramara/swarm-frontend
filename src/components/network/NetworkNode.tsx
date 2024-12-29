import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NetworkNodeProps {
  position: { x: number; y: number };
  size: number;
  color: string;
  delay: number;
  rotate?: boolean;
  duration?: number;
  pulse?: boolean;
  icon?: LucideIcon;
}

export const NetworkNode = ({ 
  position, 
  size, 
  color, 
  delay, 
  rotate = false,
  duration = 20,
  pulse = false,
  icon: Icon
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
        animate={rotate ? { 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{ 
          duration, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className={`relative ${pulse ? 'animate-pulse' : ''}`}
      >
        {Icon ? (
          <Icon className={`w-${size} h-${size} ${color}`} />
        ) : (
          <div className={`w-${size} h-${size} rounded-full ${color} bg-current`} />
        )}
      </motion.div>
    </motion.div>
  );
};