import React from 'react';
import { motion } from 'framer-motion';
import { Brain, SmilePlus, Banknote, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-neon-green" />,
      title: "Predictive Craving Engine",
      desc: "Anticipates your weak moments before they happen using biometric and behavioral data patterns.",
      color: "from-neon-green/20"
    },
    {
      icon: <SmilePlus className="w-8 h-8 text-pink-400" />,
      title: "Mood Based Nutrition AI",
      desc: "Stressed? We suggest foods that lower cortisol. Tired? We optimize for sustained energy release.",
      color: "from-pink-500/20"
    },
    {
      icon: <Banknote className="w-8 h-8 text-blue-400" />,
      title: "Student Budget Planner",
      desc: "Optimizes for maximum nutrition per Rupee. Perfect for hostel life and tight allowances.",
      color: "from-blue-500/20"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      title: "Habit Building Gamification",
      desc: "Turns healthy eating into a streak-based game. Earn rewards for consistent metabolic health.",
      color: "from-yellow-500/20"
    }
  ];

  return (
    <section className="py-24 bg-black relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why NutriMind <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">Wins</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We moved past basic calorie counting to build a system that actually understands human psychology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group overflow-hidden relative"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.color} to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
