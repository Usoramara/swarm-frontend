import { motion } from "framer-motion";

export const NetworkBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-radial from-primary/10 via-secondary/5 to-transparent rounded-full"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
};