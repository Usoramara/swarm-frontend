export const getNodePosition = (angle: number, radius: number) => ({
  x: Math.cos((angle * Math.PI) / 180) * radius,
  y: Math.sin((angle * Math.PI) / 180) * radius,
});

export const generateNodes = (count: number, radius: number, baseDelay: number) => 
  Array.from({ length: count }, (_, i) => ({
    id: `node-${radius}-${i}`,
    angle: (i * 360) / count,
    delay: i * baseDelay,
    radius,
  }));