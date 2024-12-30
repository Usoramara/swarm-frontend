interface FeatureCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
  };
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className={`bg-dark/60 backdrop-blur-sm p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors ${feature.link ? 'cursor-pointer hover:bg-dark/80' : ''}`}>
      <div className="flex flex-col items-center text-center">
        {feature.icon}
        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
        <p className="text-gray-300">{feature.description}</p>
      </div>
    </div>
  );
};