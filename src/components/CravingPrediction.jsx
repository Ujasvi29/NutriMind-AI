import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Clock, TrendingUp, CheckCircle2, Activity } from 'lucide-react';
import toast from 'react-hot-toast';

const CravingPrediction = () => {
  const scenarios = [
    {
      time: "22:45 PM",
      warning: "Late-night junk craving likely in",
      highlight: "25 mins",
      trigger: "High stress afternoon + low protein dinner.",
      prob: 89,
      action: "Try roasted peanuts + yogurt under ₹80"
    },
    {
      time: "15:30 PM",
      warning: "Stress binge risk detected",
      highlight: "after meetings",
      trigger: "Consecutive meetings without hydration.",
      prob: 76,
      action: "Drink lemon water + fruit bowl"
    },
    {
      time: "14:15 PM",
      warning: "Low energy sugar craving expected at",
      highlight: "4 PM",
      trigger: "Carb-heavy lunch + circadian dip.",
      prob: 82,
      action: "Have nuts + banana for energy"
    },
    {
      time: "Friday 18:00",
      warning: "Weekend overeating probability",
      highlight: "rising",
      trigger: "Change in routine + social plans.",
      prob: 65,
      action: "Choose grilled sandwich nearby"
    },
    {
      time: "08:00 AM",
      warning: "Sleep-loss snack craving predicted",
      highlight: "tonight",
      trigger: "Less than 6 hours sleep yesterday.",
      prob: 91,
      action: "Eat paneer wrap instead of burger"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scenarios.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [scenarios.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenarios.length);
  };

  const handleApply = () => {
    toast.success('Healthy action logged');
  };

  const current = scenarios[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-red-500/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-sm mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>Predictive Alert System</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stop cravings <span className="text-red-400">before they start.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our neural engine monitors your blood sugar patterns, stress levels, and circadian rhythm to predict when you're most likely to break your diet.
            </p>
            
            <ul className="space-y-4">
              {[
                "Analyzes sleep deprivation effects on ghrelin (hunger hormone)",
                "Correlates meeting stress with late-night binge probability",
                "Suggests preemptive snacks to stabilize blood sugar"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-neon-green shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Interactive Warning Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Pulsing rings behind card */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-full h-full max-w-[400px] border border-red-500/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              <div className="absolute w-[80%] h-[80%] border border-red-500/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-500"></div>
            </div>

            <div className="glass-card bg-black/80 border-red-500/30 p-8 shadow-[0_0_50px_rgba(239,68,68,0.15)] backdrop-blur-xl relative overflow-hidden min-h-[460px] flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
              
              <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-red-500 rounded-full animate-ping opacity-50"></div>
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      AI Warning
                      <span className="bg-red-500/20 text-red-500 text-[10px] px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider font-bold">
                        <Activity className="w-3 h-3 animate-pulse" /> LIVE
                      </span>
                    </h3>
                    <p className="text-red-400 text-sm font-medium">High Risk Detected</p>
                  </div>
                </div>
                <div className="bg-white/5 px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-mono text-white min-w-[65px] text-center">{current.time}</span>
                </div>
              </div>

              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {current.warning} <span className="text-red-500">{current.highlight}</span>.
                      </h4>
                      <p className="text-gray-400 text-sm">Trigger: {current.trigger}</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Binge Probability</span>
                        <motion.span 
                          key={`prob-${currentIndex}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 font-bold"
                        >
                          {current.prob}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <motion.div 
                          key={`bar-${currentIndex}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${current.prob}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>

                    <div className="bg-neon-green/10 border border-neon-green/20 rounded-xl p-5">
                      <h4 className="text-neon-green font-bold mb-2 text-sm uppercase tracking-wider">Preemptive Action Required</h4>
                      <p className="text-white font-medium mb-4">{current.action}.</p>
                      <div className="flex gap-3">
                        <button 
                          onClick={handleApply}
                          className="flex-1 bg-neon-green text-black font-bold py-3 rounded-lg hover:bg-[#32e011] transition-colors"
                        >
                          Apply Suggestion
                        </button>
                        <button 
                          onClick={handleNext}
                          className="px-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-white text-sm"
                        >
                          Next Alert
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CravingPrediction;
