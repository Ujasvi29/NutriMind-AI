import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, ArrowRight, CheckCircle, Search, RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';

const MealScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [isJunk, setIsJunk] = useState(true);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      
      const fileName = file.name.toLowerCase();
      const isHealthyName = fileName.includes('salad') || fileName.includes('healthy') || fileName.includes('fruit');
      setIsJunk(!isHealthyName);

      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        setShowResult(true);
        toast.success('Meal Analyzed Successfully!');
      }, 1000);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const resetScanner = () => {
    setShowResult(false);
    setImagePreview(null);
  };

  return (
    <section className="py-24 bg-neon-surface relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Visual AI <span className="text-neon-green">Meal Scanner</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Upload your meal. Our vision model identifies it, analyzes the macros, and suggests smart swaps instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showResult ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card border-dashed border-2 border-white/20 p-12 text-center hover:border-neon-green/50 transition-colors cursor-pointer group relative overflow-hidden"
              onClick={triggerFileInput}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
              
              {isScanning ? (
                <div className="flex flex-col items-center">
                  {imagePreview && (
                    <div className="absolute inset-0 opacity-20 object-cover w-full h-full">
                      <img src={imagePreview} alt="upload preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="relative mb-6 z-10">
                    <Search className="w-16 h-16 text-neon-green animate-pulse" />
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-neon-green shadow-[0_0_10px_#39FF14] animate-[scan_2s_ease-in-out_infinite]"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 z-10">Processing Image...</h3>
                  <p className="text-gray-400 z-10">Gemini Vision AI is analyzing your food.</p>
                </div>
              ) : (
                <div className="flex flex-col items-center z-10 relative">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-green/10 transition-colors">
                    <Upload className="w-10 h-10 text-gray-400 group-hover:text-neon-green transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Click to upload your meal photo</h3>
                  <p className="text-gray-400 mb-6">Supports JPG, PNG, WEBP</p>
                  <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-white/20 transition-colors">
                    <ImageIcon className="w-5 h-5" /> Select Image
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Left: Original Analysis */}
              <div className={`glass-card p-6 border-l-4 ${isJunk ? 'border-l-orange-500' : 'border-l-neon-green'}`}>
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-black rounded-xl mb-6 relative overflow-hidden group">
                  <img 
                    src={imagePreview || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                    alt="Uploaded Meal" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                      {isJunk ? "Junk Food Detected" : "Healthy Meal Detected"}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">Detected Analysis</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/50 p-3 rounded-lg border border-white/5">
                    <p className="text-sm text-gray-400">Calories</p>
                    <p className={`text-xl font-bold ${isJunk ? 'text-orange-400' : 'text-neon-green'}`}>
                      {isJunk ? '620' : '340'} <span className="text-sm font-normal text-gray-500">kcal</span>
                    </p>
                  </div>
                  <div className="bg-black/50 p-3 rounded-lg border border-white/5">
                    <p className="text-sm text-gray-400">Protein</p>
                    <p className="text-xl font-bold text-blue-400">
                      {isJunk ? '18' : '24'} <span className="text-sm font-normal text-gray-500">g</span>
                    </p>
                  </div>
                </div>
                
                <div className={`flex items-center justify-between bg-${isJunk ? 'orange-500' : 'neon-green'}/10 p-4 rounded-xl border border-${isJunk ? 'orange-500' : 'neon-green'}/20`}>
                  <span className={`font-medium text-${isJunk ? 'orange-400' : 'neon-green'}`}>Health Score</span>
                  <span className={`text-2xl font-black text-${isJunk ? 'orange-400' : 'neon-green'}`}>
                    {isJunk ? '42' : '88'}<span className="text-sm font-normal text-gray-500">/100</span>
                  </span>
                </div>
              </div>

              {/* Right: Smart Swap / Assessment */}
              <div className="glass-card p-6 border-l-4 border-l-neon-green relative">
                <div className="absolute top-1/2 -left-6 md:-left-10 w-8 h-8 md:w-12 md:h-12 bg-neon-dark rounded-full border border-white/10 flex items-center justify-center z-10 -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-neon-green" />
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-neon-green/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {isJunk ? "Smart AI Swap" : "Great Choice!"}
                  </h3>
                </div>

                {isJunk ? (
                  <>
                    <ul className="space-y-4 mb-8">
                      <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                        <div className="bg-red-500/20 text-red-400 p-1 rounded text-xs font-bold line-through">Fries / Chips</div>
                        <div>
                          <p className="text-white font-medium">Replace with side salad</p>
                          <p className="text-xs text-neon-green mt-1">-210 kcal, +Fiber</p>
                        </div>
                      </li>
                      <li className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                        <div className="bg-red-500/20 text-red-400 p-1 rounded text-xs font-bold line-through">Refined Carbs</div>
                        <div>
                          <p className="text-white font-medium">Use whole wheat alternative</p>
                          <p className="text-xs text-neon-green mt-1">Lower glycemic index</p>
                        </div>
                      </li>
                    </ul>

                    <div className="p-5 rounded-xl bg-gradient-to-r from-neon-green/20 to-emerald-500/20 border border-neon-green/30">
                      <p className="text-sm text-gray-300 mb-2">Improved Prediction</p>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">New Calories: ~450 kcal</p>
                          <p className="text-xs text-gray-400">New Score</p>
                        </div>
                        <span className="text-4xl font-black text-neon-green text-glow">68<span className="text-lg font-normal text-gray-400">/100</span></span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center mb-8">
                      <p className="text-gray-300 mb-4">You are hitting your macros perfectly. This meal provides excellent sustained energy and protein for recovery.</p>
                      <div className="inline-flex bg-neon-green/20 text-neon-green px-4 py-2 rounded-full font-bold text-sm">
                        +5 Streak Points Earned
                      </div>
                    </div>
                  </>
                )}

                <button 
                  onClick={resetScanner}
                  className="w-full mt-6 bg-white/5 border border-white/10 text-white py-3 rounded-xl hover:bg-white/10 transition-colors flex justify-center items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" /> Scan another meal
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0%, 100% { top: 0; opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { top: 100%; opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default MealScanner;
