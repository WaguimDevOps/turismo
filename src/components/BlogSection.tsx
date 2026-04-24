'use client';

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@apollo/client/react";
import { GET_BLOG_POSTS } from "@/lib/queries";

const BlogSection = () => {
  const { data, loading, error } = useQuery(GET_BLOG_POSTS);

  if (loading) return (
    <div className="py-24 text-center text-slate-500">Carregando artigos...</div>
  );

  const posts = data?.posts?.nodes || [];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-mono text-xs uppercase tracking-widest mb-3 block">Notícias e Artigos</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Fique por dentro das <br />
              <span className="italic font-light">nossas novidades</span>
            </h2>
          </div>
          <button className="text-slate-900 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-amber-600 transition-all">
            Ver Blog Completo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer h-full"
              >
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all">
                  <img 
                    src={post.featuredImage?.node?.sourceUrl || "https://picsum.photos/seed/blog/600/400"} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.categories?.nodes[0]?.name || "Notícia"}
                    </span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h3 
                    className="text-xl font-serif text-slate-900 mb-4 group-hover:text-amber-600 transition-colors leading-snug"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <div 
                    className="text-slate-500 text-sm font-light leading-relaxed mb-6 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                    Ler Artigo <ChevronRight className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
