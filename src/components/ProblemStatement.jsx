import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, CalendarX, BrainCircuit, ChevronRight } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: <PieChart className="w-8 h-8 text-rose-400" />,
      title: "Calorie apps are boring",
      desc: "Logging every gram of food is tedious. 90% of users quit calorie counting within 30 days due to friction."
    },
    {
      icon: <CalendarX className="w-8 h-8 text-orange-400" />,
      title: "Generic diet plans fail",
      desc: "Standard meal plans don't adapt to your crazy schedule, budget constraints, or sudden craving spikes."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
      title: "Real life habits are ignored",
      desc: "Stress, sleep deprivation, and mood dictate 80% of dietary choices. Existing apps ignore this completely."
    }
  ];

  return (
    <section className="py-24 relative" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Why current food apps <span className="text-rose-400">fail you</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            The old way of dieting is broken. It's time for a system that understands human behavior.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{prob.title}</h3>
              <p className="text-gray-400 leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-1 md:p-1 rounded-3xl bg-gradient-to-r from-neon-green/20 via-emerald-500/20 to-transparent"
        >
          <div className="bg-neon-surface rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                NutriMind solves this using <span className="text-neon-green text-glow">AI behavior prediction.</span>
              </h3>
              <p className="text-gray-300 text-lg">
                We don't just track what you eat. We predict what you'll crave based on your unique physiological and psychological data.
              </p>
            </div>
            
            <div className="relative z-10">
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 whitespace-nowrap">
                See How It Works <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
