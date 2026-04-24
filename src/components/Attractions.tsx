'use client';

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Share2 } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { GET_ATTRACTIONS } from "@/lib/queries";
import { handleShare } from "@/lib/utils";

const Attractions = () => {
  const { data, loading, error } = useQuery<{ posts: { nodes: any[] } }>(GET_ATTRACTIONS);

  if (loading) return (
    <div className="py-24 text-center text-slate-500">Carregando atrativos...</div>
  );

  const attractions = data?.posts?.nodes || [];

  return (
    <section id="atrativos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-mono text-xs uppercase tracking-widest mb-3 block">Roteiro Turístico</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Lugares que você <br />
              <span className="italic font-light">precisa conhecer</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">
            De estações ferroviárias históricas a monumentos de fé, Sales Oliveira oferece experiências únicas para todos os visitantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attr: any) => (
            <Link key={attr.id} href={`/atrativo/${attr.slug}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={attr.featuredImage?.node?.sourceUrl || "https://picsum.photos/seed/attraction/800/600"} 
                    alt={attr.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-amber-700">
                    {attr.categories?.nodes[0]?.name || "Turismo"}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif text-slate-900 mb-3" dangerouslySetInnerHTML={{ __html: attr.title }} />
                  <div 
                    className="text-slate-500 text-sm font-light leading-relaxed mb-6 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: attr.excerpt }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                      Saiba mais <ChevronRight className="w-4 h-4" />
                    </span>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleShare(attr.title, "Conheça este lugar em Sales Oliveira!");
                      }}
                      className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-amber-100 hover:text-amber-600 transition-all relative z-10"
                      title="Compartilhar"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
