import { motion } from "framer-motion";

interface NetworkConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  opacity?: string;
}

export const NetworkConnection = ({ startX, startY, endX, endY, delay, opacity = "40" }: NetworkConnectionProps) => {
  const dx = endX - startX;
  const dy = endY - startY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <motion.div
      className={`absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-secondary/${opacity} to-primary/${opacity}`}
      style={{
        width: distance,
        transformOrigin: "left center",
        translate: `${startX}px ${startY}px`,
        rotate: `${angle}deg`,
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: delay + 0.2, duration: 0.8 }}
    />
  );
};