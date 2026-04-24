'use client';

import React from "react";
import { motion } from "framer-motion";
import { History, Church, Trees, Camera } from "lucide-react";

const Categories = () => {
  const cats = [
    { icon: <History />, label: "Históricos", desc: "Patrimônio e memória" },
    { icon: <Church />, label: "Religiosos", desc: "Fé e contemplação" },
    { icon: <Trees />, label: "Ecoturismo", desc: "Natureza e aventura" },
    { icon: <Camera />, label: "Lazer", desc: "Momentos inesquecíveis" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {cats.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 border border-slate-100 rounded-3xl hover:border-amber-200 hover:bg-amber-50/30 transition-all text-center group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all mx-auto mb-6">
                {cat.icon}
              </div>
              <h3 className="text-lg font-serif text-slate-900 mb-2">{cat.label}</h3>
              <p className="text-slate-500 text-sm font-light">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
