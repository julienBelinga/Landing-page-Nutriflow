'use client';

import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
