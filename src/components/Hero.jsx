import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Target, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[128px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="flex h-2 w-2 rounded-full bg-neon-green"></span>
              <span className="text-sm font-medium text-gray-300">Prompt-a-thon Challenge Winner</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block text-white">AI Nutrition Coach</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400 mt-2">
                Predicts Cravings
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Personalized healthy food suggestions using mood, sleep, stress, and budget. Stop guessing, start optimizing your habits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-neon-green text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#32e011] transition-all transform hover:scale-105 box-glow flex items-center justify-center gap-2"
              >
                Try Demo <Activity className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass px-8 py-4 rounded-full font-bold text-lg text-white hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="glass-card p-6 md:p-8 animate-float">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neon-green to-emerald-500 p-[2px]">
                    <div className="w-full h-full rounded-full bg-neon-surface flex items-center justify-center">
                      <Brain className="w-6 h-6 text-neon-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Daily Optimization</h3>
                    <p className="text-sm text-neon-green">AI Active & Tracking</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-white">82<span className="text-lg text-gray-400">%</span></p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Health Score</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-medium">Calories Today</span>
                  </div>
                  <p className="text-2xl font-bold text-white">1,480</p>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full mt-3">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-1.5 rounded-full w-[65%]"></div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">Protein Goal</span>
                  </div>
                  <p className="text-2xl font-bold text-white">76<span className="text-base text-gray-500">%</span></p>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full mt-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-1.5 rounded-full w-[76%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-neon-green/10 rounded-xl p-4 border border-neon-green/20 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Current Mood Detected</p>
                  <p className="text-lg font-bold text-neon-green">Focused & Energetic</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-neon-green" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gradient-to-tr from-neon-green/20 to-transparent blur-2xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
