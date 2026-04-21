import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul M.",
      role: "Engineering Student",
      text: "Finally a health app for hostel life. It literally plans my macros around the awful mess food and my tiny budget.",
      avatar: "https://ui-avatars.com/api/?name=Rahul+M&background=121212&color=39FF14"
    },
    {
      name: "Priya S.",
      role: "Working Professional",
      text: "Helped me stop stress eating. The app warned me I was going to binge on chips at 10 PM and suggested a great alternative.",
      avatar: "https://ui-avatars.com/api/?name=Priya+S&background=121212&color=39FF14"
    },
    {
      name: "Karan V.",
      role: "Gym Enthusiast",
      text: "Meal planning became effortless. It adjusts my protein intake based on how intense my workout was that day. Genius.",
      avatar: "https://ui-avatars.com/api/?name=Karan+V&background=121212&color=39FF14"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Early <span className="text-neon-green">Adopters</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-xs text-neon-green">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
