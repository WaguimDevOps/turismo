'use client';

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Ticket } from "lucide-react";

const HospitalitySection = () => {
  const services = [
    {
      title: "Onde Comer",
      desc: "Descubra os sabores locais, de cafés charmosos a restaurantes tradicionais.",
      image: "https://picsum.photos/seed/food/800/600",
      icon: <Ticket className="w-6 h-6" />,
      link: "#"
    },
    {
      title: "Onde Dormir",
      desc: "Encontre o descanso perfeito em nossas pousadas e hotéis acolhedores.",
      image: "https://picsum.photos/seed/hotel/800/600",
      icon: <MapPin className="w-6 h-6" />,
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.link}
              whileHover={{ scale: 1.02 }}
              className="relative group block h-[400px] rounded-[3rem] overflow-hidden shadow-lg"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-amber-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">{service.title}</h3>
                <p className="text-white/70 font-light leading-relaxed mb-6 max-w-xs">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
                  Explorar Opções <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection;
