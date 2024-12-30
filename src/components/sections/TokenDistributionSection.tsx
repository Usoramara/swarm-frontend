import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Users, Rocket, Lock } from "lucide-react";

export const TokenDistributionSection = () => {
  const distribution = [
    { name: "Community Rewards", value: 40, color: "#ACFF00" },
    { name: "Development", value: 20, color: "#88CC00" },
    { name: "Team & Advisors", value: 15, color: "#669900" },
    { name: "Treasury", value: 25, color: "#445500" }
  ];

  const categories = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Rewards",
      description: "40% distributed to active participants and stakeholders"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Development",
      description: "20% allocated for ongoing platform development"
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Team & Advisors",
      description: "15% reserved for team members and advisors (vested)"
    },
    {
      icon: <Coins className="w-8 h-8 text-primary" />,
      title: "Treasury",
      description: "25% held in treasury for future initiatives"
    }
  ];

  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Token <span className="gradient-text">Distribution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            SWARM tokens are distributed to align incentives between all stakeholders and ensure sustainable growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  innerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name} (${value}%)`}
                >
                  {distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            {categories.map((category, index) => (
              <Card key={index} className="bg-dark border-dark-lighter">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};