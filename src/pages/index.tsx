import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Star, Trophy, ArrowRight } from 'lucide-react';

export default function ProLanding() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-4">DAYBREAK</h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-0.5 bg-yellow-500" />
              <h2 className="text-2xl font-light tracking-widest">ELITE</h2>
              <div className="w-12 h-0.5 bg-yellow-500" />
            </div>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
              Where legends are forged before sunrise
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sun className="w-12 h-12" />,
                  title: "PRO TRAINING",
                  features: ["6 AM Elite Sessions", "AI Performance", "Pro Coaching"]
                },
                {
                  icon: <Trophy className="w-12 h-12" />,
                  title: "DEVELOPMENT",
                  features: ["Mental Training", "Leadership", "College Prep"]
                },
                {
                  icon: <Star className="w-12 h-12" />,
                  title: "EXPOSURE",
                  features: ["Pro Networks", "Media Training", "NIL Ready"]
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-black rounded-lg hover:bg-zinc-800 transition duration-300">
                  <div className="text-yellow-500 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="text-gray-400">{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">JOIN THE ELITE</h2>
            <button className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-none hover:bg-white transition-colors flex items-center mx-auto">
              GET STARTED <ArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">DAYBREAK</div>
          <div className="text-gray-400">NYC • First Light, First Win</div>
        </div>
      </footer>
    </div>
  );
}