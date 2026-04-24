'use client';

import React from "react";
import { MapPin, Info } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/history/1000/1000" 
                alt="Sales Oliveira History" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-600 text-white p-12 rounded-[2rem] hidden md:block">
              <span className="text-4xl font-serif block mb-1">100+</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-80">Anos de História</span>
            </div>
          </div>
          <div>
            <span className="text-amber-600 font-mono text-xs uppercase tracking-widest mb-3 block">Sobre a Cidade</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-8">
              Uma história que <br />
              <span className="italic font-light">transborda arte</span>
            </h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>
                Sales Oliveira é uma joia do interior paulista, conhecida por sua rica herança cultural e arquitetônica. Fundada no auge da expansão ferroviária e cafeeira, a cidade mantém vivo o charme de outras épocas através de seus casarões e monumentos.
              </p>
              <p>
                Mas não é apenas o passado que define Sales Oliveira. Hoje, a cidade é um polo de eventos vibrantes, religiosidade profunda e um povo acolhedor que recebe todos os turistas com o coração aberto.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-amber-600 mt-1"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-serif text-slate-900">Localização</h4>
                  <p className="text-xs text-slate-500">Região de Ribeirão Preto, SP</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-amber-600 mt-1"><Info className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-serif text-slate-900">População</h4>
                  <p className="text-xs text-slate-500">Aprox. 12.000 habitantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
