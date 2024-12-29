import { motion } from "framer-motion";

interface NetworkConnectionProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  delay: number;
  opacity?: string;
}

export const NetworkConnection = ({ 
  start, 
  end, 
  delay, 
  opacity = "60" // Increased default opacity
}: NetworkConnectionProps) => {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <motion.div
      className={`absolute left-1/2 top-1/2 h-[2px] bg-gradient-to-r from-secondary/${opacity} to-primary/${opacity}`}
      style={{
        width: distance,
        transformOrigin: "left center",
        rotate: `${angle}deg`,
        transform: `translate(${start.x}px, ${start.y}px)`,
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    />
  );
};