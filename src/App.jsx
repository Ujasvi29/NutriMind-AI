import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import RecommendationEngine from './components/RecommendationEngine';
import CravingPrediction from './components/CravingPrediction';
import MealScanner from './components/MealScanner';
import StudentMode from './components/StudentMode';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen relative">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#121212',
            color: '#fff',
            border: '1px solid rgba(57, 255, 20, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#39FF14',
              secondary: '#000',
            },
          },
        }}
      />
      <div className="particles-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <RecommendationEngine />
        <CravingPrediction />
        <MealScanner />
        <StudentMode />
        <Features />
        <TechStack />
        <Metrics />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
