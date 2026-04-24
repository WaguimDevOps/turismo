'use client';

import React from "react";
import { use } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_POST_BY_SLUG } from "@/lib/queries";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SinglePost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data, loading, error } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-12 h-12 bg-amber-200 rounded-full mb-4"></div>
        <div className="text-slate-400 font-serif italic text-xl">Carregando conteúdo...</div>
      </div>
    </div>
  );

  if (error || !data?.post) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-serif text-slate-900 mb-4">Post não encontrado</h1>
      <p className="text-slate-500 mb-8">O conteúdo que você procura não pôde ser carregado.</p>
      <Link href="/" className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-all flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Voltar para o Início
      </Link>
    </div>
  );

  const post = data.post;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.featuredImage?.node?.sourceUrl || "https://picsum.photos/seed/post/1920/1080"} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white" />
        </div>

        <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {post.categories?.nodes[0]?.name || "Geral"}
              </span>
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('pt-BR')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6" dangerouslySetInnerHTML={{ __html: post.title }} />
            <div className="flex items-center gap-3 text-white/90 text-sm italic">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xs font-bold not-italic">
                {post.author?.node?.name?.charAt(0) || "U"}
              </div>
              Por {post.author?.node?.name || "Redação"}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-serif prose-headings:text-slate-900
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-light
            prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-3xl prose-img:shadow-xl
            selection:bg-amber-100 selection:text-amber-900"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        {/* Footer of Content */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link href="/" className="text-slate-900 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Voltar para o Início
          </Link>
          
          <div className="flex gap-4">
             {/* Simple Post Navigation or Share Could Go Here */}
          </div>
        </div>
      </main>
    </div>
  );
}
