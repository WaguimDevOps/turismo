/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Attractions from "@/components/Attractions";
import HospitalitySection from "@/components/HospitalitySection";
import EventsSection from "@/components/EventsSection";
import BlogSection from "@/components/BlogSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <FadeInSection><Categories /></FadeInSection>
        <FadeInSection><Attractions /></FadeInSection>
        <FadeInSection><HospitalitySection /></FadeInSection>
        <FadeInSection><EventsSection /></FadeInSection>
        <FadeInSection><BlogSection /></FadeInSection>
        <FadeInSection><About /></FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
