'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { GET_EVENTOS } from "@/lib/queries";

const EventsSection = () => {
  const { data, loading } = useQuery(GET_EVENTOS);
  const events = data?.eventos?.nodes || [];

  if (loading) return (
    <div className="py-24 text-center text-slate-500">Carregando eventos...</div>
  );

  return (
    <section id="eventos" className="py-24 bg-[#FCFAF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-[#8B5E3C]"></div>
              <span className="text-[#8B5E3C] font-sans text-xs uppercase tracking-[0.2em] font-semibold">PROGRAME-SE</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-serif text-[#1A2E1A] leading-tight">
              Próximos <br />
              <span className="italic">eventos</span>
            </h2>
          </div>
          <Link href="/eventos" className="text-sm font-medium text-[#1A2E1A]/60 hover:text-[#1A2E1A] transition-colors border-b border-[#1A2E1A]/20 pb-1">
            Ver agenda completa &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FCFAF5] border border-[#F2EDE4] rounded-[2.5rem] p-10 flex flex-col min-h-[480px] hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500 group cursor-pointer"
            >
              <div className="mb-10">
                <span className="bg-[#F9EBE6] text-[#D48F78] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  {event.mes} {event.ano}
                </span>
              </div>

              <div className="mb-8">
                <div className="text-[64px] font-serif text-[#8B5E3C] leading-none mb-1">
                  {event.dataRange}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C]/60">
                  {event.mes}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-serif text-[#1A2E1A] mb-4 group-hover:text-[#8B5E3C] transition-colors duration-300">
                  {event.title}
                </h3>
                <div 
                  className="text-[#6B7280] text-sm font-light leading-relaxed line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: event.content }}
                />
              </div>

              <div className="mt-10 pt-8 border-t border-[#F2EDE4] flex justify-between items-center">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                  {event.categoria?.replace(',', ' ·')}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F9F7F2] flex items-center justify-center group-hover:bg-[#1A2E1A] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
