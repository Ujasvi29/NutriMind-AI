import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Wallet, UtensilsCrossed, ChevronDown, Target, Loader2, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

const StudentMode = () => {
  const [budget, setBudget] = useState(120);
  const [goal, setGoal] = useState('fat-loss');
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState(null);

  const ALL_MESS_ITEMS = ['Rice', 'Dal', 'Paneer', 'Roti', 'Curd', 'Salad', 'Potato Curry'];
  const [selectedItems, setSelectedItems] = useState(['Rice', 'Dal', 'Paneer', 'Roti']);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      if (selectedItems.length > 2) {
        setSelectedItems(selectedItems.filter(i => i !== item));
      }
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const generateMealPlan = () => {
    setIsGenerating(true);
    setResults(null);
    
    setTimeout(() => {
      let plan1, plan2;
      
      if (goal === 'fat-loss') {
        plan1 = {
          title: "Best Fat-Loss Meal",
          items: "2 Roti + Paneer + Dal",
          highlight: "Carbs",
          value: "45g",
          pct: "45%",
          color: "blue-400",
          desc: "Skip rice to maintain caloric deficit while keeping protein high from paneer and dal."
        };
        plan2 = {
          title: "Light Dinner Option",
          items: "Salad + Curd + 1 Roti",
          highlight: "Calories",
          value: "320",
          pct: "30%",
          color: "blue-400",
          desc: "High volume, very low calories. Perfect for ending the day."
        };
      } else if (goal === 'muscle-gain') {
        plan1 = {
          title: "Muscle Protein Meal",
          items: "Paneer + Rice + Dal",
          highlight: "Protein",
          value: "32g",
          pct: "70%",
          color: "indigo-400",
          desc: "Rice + Dal creates complete amino acid profile. Paneer boosts overall protein count."
        };
        plan2 = {
          title: "Pre-Workout Fuel",
          items: "2 Roti + Potato Curry + Curd",
          highlight: "Carbs",
          value: "65g",
          pct: "65%",
          color: "indigo-400",
          desc: "Fast acting carbs from potato and roti for workout energy."
        };
      } else {
        plan1 = {
          title: "Budget Friendly Combo",
          items: "Rice + Dal + Curd",
          highlight: "Cost",
          value: "₹45",
          pct: "25%",
          color: "green-400",
          desc: "Hits all basic nutritional markers well under your daily budget."
        };
        plan2 = {
          title: "Balanced Mess Meal",
          items: "1 Roti + Rice + Dal + Salad",
          highlight: "Health",
          value: "92/100",
          pct: "92%",
          color: "green-400",
          desc: "Perfectly balanced macro split using standard mess items."
        };
      }
      
      setResults([plan1, plan2]);
      setIsGenerating(false);
      toast.success('Student Plan Generated!');
    }, 1000);
  };

  return (
    <section className="py-24 relative" id="students">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 font-medium text-sm mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Highly Relatable Feature</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Built for <span className="text-indigo-400">Students & Hostels</span>
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-xl">
              Can't afford avocados? Eating at the mess? NutriMind optimizes exactly what's available to you under tight budgets.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Input Configuration */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-indigo-400" /> Daily Constraints
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Budget: ₹{budget}/day</span>
                  <span className="text-indigo-400 font-bold">₹300 max</span>
                </div>
                <input 
                  type="range" min="50" max="300" value={budget} onChange={(e) => setBudget(e.target.value)}
                  className="w-full accent-indigo-500 bg-gray-700 h-2 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Target className="w-4 h-4 text-indigo-400" /> Primary Goal
                </label>
                <select 
                  value={goal} onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-400 transition-colors appearance-none"
                >
                  <option value="fat-loss">Fat Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="budget-save">Save Money</option>
                </select>
              </div>

              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4 text-gray-400" /> Available Mess Menu
                </label>
                <div className="bg-black/50 border border-white/10 rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {ALL_MESS_ITEMS.map(item => (
                      <button 
                        key={item} 
                        onClick={() => toggleItem(item)}
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors border ${
                          selectedItems.includes(item) 
                          ? 'bg-indigo-500/20 border-indigo-500/50 text-white' 
                          : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={generateMealPlan}
                disabled={isGenerating}
                className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
              >
                {isGenerating ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Sparkles className="w-5 h-5" /> Generate Meal Plan</>}
              </button>
            </motion.div>
          </div>

          {/* AI Output Generation */}
          <div className="lg:col-span-7">
            <div className="h-full">
              <AnimatePresence mode="wait">
                {!results && !isGenerating ? (
                   <motion.div 
                     key="empty"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="w-full h-full min-h-[400px] glass-card flex flex-col items-center justify-center text-center p-8 border-dashed border-2 border-white/10"
                   >
                     <GraduationCap className="w-16 h-16 text-gray-600 mb-4" />
                     <h3 className="text-xl font-medium text-gray-400">Ready to optimize</h3>
                     <p className="text-gray-500 mt-2">Adjust your constraints and hit generate</p>
                   </motion.div>
                ) : isGenerating ? (
                   <motion.div 
                     key="loading"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="w-full h-full min-h-[400px] glass-card flex flex-col items-center justify-center p-8"
                   >
                     <div className="w-20 h-20 relative mb-6">
                       <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
                       <div className="absolute inset-0 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Calculating permutations...</h3>
                     <p className="text-indigo-400 text-sm animate-pulse">Checking budget and macros</p>
                   </motion.div>
                ) : (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid md:grid-cols-2 gap-6 h-full"
                  >
                    {results.map((res, idx) => (
                      <div key={idx} className={`glass-card p-6 flex flex-col relative overflow-hidden group hover:border-${res.color}/50 transition-colors`}>
                        <div className={`absolute top-0 left-0 w-full h-1 bg-${res.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                        <h4 className={`text-sm font-bold text-${res.color} uppercase tracking-wider mb-2`}>{res.title}</h4>
                        <p className="text-3xl font-black text-white mb-6">{res.items}</p>
                        
                        <div className="mt-auto space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">{res.highlight}</span>
                            <span className="text-white">{res.value}</span>
                          </div>
                          <div className="w-full bg-gray-800 h-1.5 rounded-full">
                            <div className={`bg-${res.color} h-1.5 rounded-full`} style={{width: res.pct}}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">{res.desc}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentMode;
