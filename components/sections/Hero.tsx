'use client';

import { useState, useEffect } from 'react';
import { Leaf, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#F5F5F5] to-[#FFFFFF]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#E5E5E5]">
            <Leaf className="w-4 h-4 text-[#A8E063]" />
            <span className="text-sm font-medium text-[#2E2E2E]">
              Tracking intelligent par IA
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-[#2E2E2E] leading-tight">
            Suivez vos calories avec{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8E063] to-[#7BC041]">
              l'intelligence
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-[#707070] max-w-xl mx-auto lg:mx-0">
            NutriFlow utilise l'IA pour analyser vos repas, calculer vos objectifs et vous accompagner dans votre parcours nutritionnel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#A8E063] to-[#7BC041] hover:from-[#7BC041] hover:to-[#A8E063] text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Commencer gratuitement
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#E5E5E5] bg-white hover:bg-[#FAFAFA] text-[#2E2E2E] font-semibold px-8 py-6 text-lg rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              Voir la démo
            </Button>
          </div>

          <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-[#2E2E2E]">50K+</div>
              <div className="text-sm text-[#707070]">Utilisateurs actifs</div>
            </div>
            <div className="h-12 w-px bg-[#E5E5E5]" />
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-[#2E2E2E]">4.8★</div>
              <div className="text-sm text-[#707070]">Note moyenne</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateY(${Math.sin(Date.now() / 1000) * 10}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A8E063]/20 to-[#C9A9FF]/20 blur-3xl rounded-full" />

            <div className="relative w-[280px] h-[560px] bg-[#2E2E2E] rounded-[3rem] shadow-2xl overflow-hidden border-8 border-[#2E2E2E]">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#2E2E2E] rounded-b-3xl z-20" />

              <div className="relative h-full w-full bg-gradient-to-br from-white to-[#FAFAFA] p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A8E063] to-[#7BC041] flex items-center justify-center shadow-md">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-[#2E2E2E]">NutriFlow</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-[#E5E5E5]" />
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#E5E5E5] mb-4">
                  <div className="text-sm text-[#707070] mb-2">Aujourd'hui</div>
                  <div className="text-4xl font-bold text-[#2E2E2E] mb-1">
                    1,247
                    <span className="text-[#C9A9FF] text-2xl ml-2">kcal</span>
                  </div>
                  <div className="text-sm text-[#707070]">sur 2,000 kcal</div>

                  <div className="mt-4 h-3 bg-[#FAFAFA] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#A8E063] to-[#7BC041] rounded-full transition-all duration-1000"
                      style={{ width: '62%' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Protéines', value: '45g', color: '#A7D8F8' },
                    { label: 'Glucides', value: '128g', color: '#C9A9FF' },
                    { label: 'Lipides', value: '38g', color: '#A8E063' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white rounded-2xl p-3 shadow-sm border border-[#E5E5E5] text-center"
                    >
                      <div
                        className="text-lg font-bold mb-1"
                        style={{ color: item.color }}
                      >
                        {item.value}
                      </div>
                      <div className="text-xs text-[#707070]">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-[#A8E063] to-[#7BC041] rounded-3xl p-4 shadow-lg">
                  <div className="text-white text-sm mb-2">Repas suivant</div>
                  <div className="text-white text-lg font-semibold">
                    Déjeuner dans 2h 30
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 -right-10 w-20 h-20 bg-[#C9A9FF]/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 -left-10 w-32 h-32 bg-[#A7D8F8]/20 rounded-full blur-xl animate-pulse delay-75" />
        </div>
      </div>
    </section>
  );
}
