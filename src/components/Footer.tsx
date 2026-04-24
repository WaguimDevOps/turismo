'use client';

import React from "react";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
              <span className="font-serif text-lg tracking-tight text-slate-900">Sales Oliveira <span className="italic font-light">Turismo</span></span>
            </div>
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
              O portal oficial para descobrir as maravilhas da nossa cidade. Explore, viva e sinta Sales Oliveira.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-slate-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Início</a></li>
              <li><a href="#atrativos" className="hover:text-amber-600 transition-colors">Atrativos</a></li>
              <li><a href="#eventos" className="hover:text-amber-600 transition-colors">Eventos</a></li>
              <li><a href="#sobre" className="hover:text-amber-600 transition-colors">Sobre a Cidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-slate-900 mb-6">Suporte ao Turista</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-amber-600" /> (16) 3852-0000</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-amber-600" /> turismo@salesoliveira.sp.gov.br</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-amber-600" /> Praça Santa Rita, Centro</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-slate-900 mb-6">Newsletter</h4>
            <p className="text-xs text-slate-500 mb-4 font-light">Receba novidades sobre eventos e novos roteiros.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-amber-600 transition-colors"
              />
              <button className="bg-slate-900 text-white p-2 rounded-full hover:bg-amber-600 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          <p>© 2026 Prefeitura de Sales Oliveira - Secretaria de Turismo</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-600">Privacidade</a>
            <a href="#" className="hover:text-amber-600">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
