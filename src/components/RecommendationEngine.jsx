import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Utensils, Coins, Moon, Activity, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const RecommendationEngine = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    mood: 'happy',
    budget: '',
    goal: 'healthy eating',
    sleep: '',
    stress: 5,
    mealTime: 'lunch'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateSuggestion = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // Simulate API Call
    setTimeout(() => {
      let suggestion = {
        title: "",
        desc: "",
        items: [],
        score: 0,
        tag: ""
      };

      const budget = Number(formData.budget);
      
      if (formData.stress > 7 || formData.sleep < 6 || formData.mood === 'stressed') {
        suggestion = {
          title: "Recovery Meal Required",
          desc: "High stress and low sleep detected. Avoid junk food.",
          items: ["Banana Smoothie", "Mixed Nuts", "Paneer Wrap"],
          score: 88,
          tag: "Stress Relief"
        };
      } else if (formData.goal === 'muscle gain') {
        suggestion = {
          title: "Anabolic Building Block",
          desc: "Perfect macros to hit your protein targets.",
          items: ["Paneer", "Boiled Eggs (3x)", "Brown Rice"],
          score: 94,
          tag: "High Protein"
        };
      } else if (formData.goal === 'weight loss') {
        suggestion = {
          title: "Caloric Deficit Special",
          desc: "High volume, low calorie meal to keep you full longer.",
          items: ["Quinoa Salad Bowl", "Grilled Veg Sandwich"],
          score: 91,
          tag: "Low Calorie"
        };
      } else if (budget > 0 && budget <= 100) {
        suggestion = {
          title: "Budget Student Special",
          desc: "Affordable healthy student combo without breaking the bank.",
          items: ["Oats with Milk", "2 Bananas", "Boiled Chana"],
          score: 85,
          tag: "Under ₹100"
        };
      } else {
        suggestion = {
          title: "Balanced Daily Fuel",
          desc: "Optimal nutrition for sustained energy throughout the day.",
          items: ["Grilled Tofu/Chicken", "Roasted Veggies", "Sweet Potato"],
          score: 90,
          tag: "Balanced"
        };
      }

      setResult(suggestion);
      setLoading(false);
      toast.success('Recommendation Ready!');
    }, 1000);
  };

  return (
    <section className="py-24 relative bg-black/50" id="demo">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Smart <span className="text-neon-green">Recommendation Engine</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Input your current state and let our AI generate the perfect meal for your physiology right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 border-t-4 border-t-neon-green"
          >
            <form onSubmit={generateSuggestion} className="space-y-6">
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-neon-green" /> Mood
                  </label>
                  <select 
                    name="mood" value={formData.mood} onChange={handleInputChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors appearance-none"
                  >
                    <option value="happy">Happy & Energetic</option>
                    <option value="stressed">Stressed / Anxious</option>
                    <option value="tired">Tired / Fatigued</option>
                    <option value="bored">Bored</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Coins className="w-4 h-4 text-yellow-400" /> Budget (₹)
                  </label>
                  <input 
                    type="number" name="budget" placeholder="e.g. 150" value={formData.budget} onChange={handleInputChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-orange-400" /> Goal
                  </label>
                  <select 
                    name="goal" value={formData.goal} onChange={handleInputChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors appearance-none"
                  >
                    <option value="healthy eating">General Health</option>
                    <option value="weight loss">Weight Loss</option>
                    <option value="muscle gain">Muscle Gain</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <Moon className="w-4 h-4 text-indigo-400" /> Sleep (Hours)
                  </label>
                  <input 
                    type="number" name="sleep" placeholder="e.g. 6" value={formData.sleep} onChange={handleInputChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Stress Level: {formData.stress}/10</label>
                </div>
                <input 
                  type="range" min="1" max="10" name="stress" value={formData.stress} onChange={handleInputChange}
                  className="w-full accent-neon-green bg-gray-700 h-2 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Zen</span>
                  <span>Overwhelmed</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Meal Time</label>
                <div className="grid grid-cols-4 gap-2">
                  {['Breakfast', 'Lunch', 'Dinner', 'Late Night'].map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData(prev => ({...prev, mealTime: time.toLowerCase()}))}
                      className={`py-2 text-xs font-medium rounded-lg border transition-all ${
                        formData.mealTime === time.toLowerCase() 
                        ? 'bg-neon-green/20 border-neon-green text-neon-green' 
                        : 'bg-black/30 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Sparkles className="w-5 h-5" /> Generate Smart Suggestion</>}
              </button>
            </form>
          </motion.div>

          {/* Result Card */}
          <div className="h-full flex items-center relative">
            <AnimatePresence mode="wait">
              {!result && !loading ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full min-h-[400px] glass-card flex flex-col items-center justify-center text-center p-8 border-dashed border-2 border-white/10"
                >
                  <Sparkles className="w-16 h-16 text-gray-600 mb-4" />
                  <h3 className="text-xl font-medium text-gray-400">Awaiting Input</h3>
                  <p className="text-gray-500 mt-2">Fill the form to see AI magic in action</p>
                </motion.div>
              ) : loading ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full min-h-[400px] glass-card flex flex-col items-center justify-center p-8"
                >
                  <div className="w-20 h-20 relative mb-6">
                    <div className="absolute inset-0 border-4 border-neon-green/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-neon-green rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Analyzing Biomarkers...</h3>
                  <p className="text-neon-green text-sm animate-pulse">Running recommendation engine</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full glass-card overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-neon-green/20 to-emerald-500/20 p-8 border-b border-white/10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-neon-green text-black px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                        {result.tag}
                      </span>
                      <div className="text-right">
                        <span className="text-3xl font-black text-white">{result.score}</span>
                        <span className="text-sm text-gray-400 block">Health Score</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{result.title}</h3>
                    <p className="text-gray-300">{result.desc}</p>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Recommended Items</h4>
                    <ul className="space-y-3">
                      {result.items.map((item, idx) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          key={idx} 
                          className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5"
                        >
                          <div className="w-2 h-2 rounded-full bg-neon-green"></div>
                          <span className="text-white font-medium">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <button className="w-full mt-8 bg-neon-green/10 text-neon-green border border-neon-green/30 hover:bg-neon-green hover:text-black py-3 rounded-xl font-bold transition-all">
                      Save to Meal Plan
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationEngine;
