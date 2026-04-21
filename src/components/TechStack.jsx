import React from 'react';
import { motion } from 'framer-motion';
import { Map, Bot, Database, Cloud } from 'lucide-react';

const TechStack = () => {
  const techs = [
    {
      icon: <Map className="w-8 h-8 text-[#4285F4]" />,
      title: "Google Maps API",
      desc: "Find nearby healthy food options instantly based on AI recommendations."
    },
    {
      icon: <Bot className="w-8 h-8 text-[#0F9D58]" />,
      title: "Gemini AI",
      desc: "Powers our smart meal recommendations and visual food analysis."
    },
    {
      icon: <Database className="w-8 h-8 text-[#F4B400]" />,
      title: "Firebase",
      desc: "Handles realtime user data, habit tracking, and streak gamification."
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#DB4437]" />,
      title: "Google Cloud Run",
      desc: "Fast, scalable deployment handling thousands of concurrent meal queries."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-white/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#0F9D58] to-[#F4B400]">Google Ecosystem</span>
          </h2>
          <div className="inline-block mt-4 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
            <p className="text-sm font-bold tracking-wider uppercase text-gray-300">Built for Google-ready scale</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{tech.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
