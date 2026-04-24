'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className={`font-serif text-xl tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}><span className="italic font-light">Turismo</span></span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest ${isScrolled ? "text-slate-600" : "text-white/80"}`}>
          <a href="#" className="hover:text-amber-600 transition-colors">Início</a>
          <a href="#atrativos" className="hover:text-amber-600 transition-colors">Atrativos</a>
          <a href="#eventos" className="hover:text-amber-600 transition-colors">Eventos</a>
          <a href="#blog" className="hover:text-amber-600 transition-colors">Blog</a>
          <a href="#sobre" className="hover:text-amber-600 transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-amber-600 transition-colors">Contato</a>
        </div>

        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className={isScrolled ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center gap-6 md:hidden"
          >
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-medium">Início</a>
            <a href="#atrativos" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-medium">Atrativos</a>
            <a href="#eventos" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-medium">Eventos</a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-medium">Blog</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-medium">Sobre</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-slate-900 font-medium">Contato</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
