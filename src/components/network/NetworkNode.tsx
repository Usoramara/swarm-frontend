import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

interface NetworkNodeProps {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  rotate?: boolean;
}

export const NetworkNode = ({ id, x, y, size, color, delay, rotate = true }: NetworkNodeProps) => {
  return (
    <motion.div
      key={id}
      className="absolute left-1/2 top-1/2"
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      whileInView={{ x, y, scale: 1, opacity: 1 }}
      transition={{ delay, duration: 1, type: "spring", stiffness: 60 }}
    >
      <motion.div
        animate={rotate ? { rotate: [0, 360] } : undefined}
        transition={rotate ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
      >
        <Hexagon className={`w-${size} h-${size} ${color}`} />
      </motion.div>
    </motion.div>
  );
};