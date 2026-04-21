import React from 'react';
import { motion } from 'framer-motion';

const Metrics = () => {
  const stats = [
    { value: "92%", label: "Healthier Choices Predicted" },
    { value: "30%", label: "Reduced Junk Cravings" },
    { value: "₹100/d", label: "Budget Plans Generated" },
    { value: "5x", label: "Higher Diet Consistency" }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-neon-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-white mb-2 text-glow">{stat.value}</p>
              <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
