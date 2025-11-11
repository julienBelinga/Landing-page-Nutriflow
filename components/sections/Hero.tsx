"use client";

import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
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
            Suivez vos calories avec{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8E063] to-[#7BC041]">
              l'intelligence
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-[#707070] max-w-xl mx-auto lg:mx-0">
            NutriFlow utilise l'IA pour analyser vos repas, calculer vos
            objectifs et vous accompagner dans votre parcours nutritionnel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://apps.apple.com/app/id000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg min-w-[200px]"
            >
              <img
                src="/assets/img/apple.png"
                alt="Apple"
                className="w-8 h-8"
                draggable={false}
              />
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight">
                  Télécharger dans
                </span>
                <span className="text-lg font-semibold leading-tight">
                  App Store
                </span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=nutriflow.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg min-w-[200px]"
            >
              <img
                src="/assets/img/playstore.png"
                alt="Google Play"
                className="w-8 h-8"
                draggable={false}
              />
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight">
                  Disponible sur
                </span>
                <span className="text-lg font-semibold leading-tight">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${
                mousePosition.y * 0.5
              }deg) rotateY(${mousePosition.x * 0.5}deg) translateY(${
                Math.sin(Date.now() / 1000) * 10
              }px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A8E063]/20 to-[#C9A9FF]/20 blur-3xl rounded-full" />

            {/* iPhone 16 Pro Frame */}
            <div className="relative w-[320px] h-[660px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3.5rem] shadow-2xl p-3">
              {/* Boutons volume (gauche) */}
              <div className="absolute left-0 top-[120px] w-1 h-[30px] bg-gray-700 rounded-r-sm" />
              <div className="absolute left-0 top-[165px] w-1 h-[60px] bg-gray-700 rounded-r-sm" />
              <div className="absolute left-0 top-[238px] w-1 h-[60px] bg-gray-700 rounded-r-sm" />

              {/* Bouton power (droite) */}
              <div className="absolute right-0 top-[180px] w-1 h-[80px] bg-gray-700 rounded-l-sm" />

              {/* Écran */}
              <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden">
                <img
                  src="/assets/img/screenshot.jpeg"
                  alt="NutriFlow App Screenshot"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
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
