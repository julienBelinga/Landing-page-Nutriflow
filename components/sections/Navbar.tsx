"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/assets/img/logo.png"
              alt="NutriFlow Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-[#2E2E2E]">NutriFlow</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-[#707070] hover:text-[#2E2E2E] font-medium transition-colors"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-[#707070] hover:text-[#2E2E2E] font-medium transition-colors"
            >
              Tarifs
            </button>
            <a
              href="/support"
              className="text-[#707070] hover:text-[#2E2E2E] font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2E2E2E] hover:bg-[#FAFAFA] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#E5E5E5] bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 px-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-[#707070] hover:text-[#2E2E2E] font-medium transition-colors text-left py-2"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-[#707070] hover:text-[#2E2E2E] font-medium transition-colors text-left py-2"
              >
                Tarifs
              </button>
              <a
                href="/support"
                className="text-[#707070] hover:text-[#2E2E2E] font-medium transition-colors text-left py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-[#E5E5E5] space-y-3">
                <Button
                  variant="ghost"
                  className="w-full text-[#2E2E2E] hover:text-[#A8E063] font-semibold"
                >
                  Se connecter
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#A8E063] to-[#7BC041] hover:from-[#7BC041] hover:to-[#A8E063] text-white font-semibold rounded-xl shadow-md">
                  Essai gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
