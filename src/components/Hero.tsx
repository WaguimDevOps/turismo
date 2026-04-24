'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/landscape/1920/1080" 
          alt="Sales Oliveira Landscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-900/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-400 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Bem-vindo à Terra da Arte e História</span>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8">
            Descubra a Essência de <br />
            <span className="italic font-light">Sales Oliveira</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Uma cidade que transborda cultura, fé e belezas naturais no coração do interior paulista. Explore nossos marcos históricos e eventos vibrantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#atrativos" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 group">
              Explorar Atrativos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#eventos" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all">
              Ver Próximos Eventos
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
