"use client";

import { Leaf, Mail, Github, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/img/logo.png";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-[#FAFAFA] to-white border-t border-[#E5E5E5] py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <a
              href="/"
              className="flex items-center gap-2 w-fit cursor-pointer"
            >
              <Image src={logo} alt="NutriFlow" width={32} height={32} />
            </a>
            <p className="text-[#707070]">
              L'application de tracking de calories intelligente qui vous
              accompagne vers une meilleure santé.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-4">Produit</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#features"
                  className="text-[#707070] hover:text-[#A8E063] transition-colors"
                >
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="text-[#707070] hover:text-[#A8E063] transition-colors"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="/#hero"
                  className="text-[#707070] hover:text-[#A8E063] transition-colors"
                >
                  Télécharger
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-4">Communauté</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/feature-request"
                  className="text-[#707070] hover:text-[#A8E063] transition-colors"
                >
                  Suggérer une fonctionnalité
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-[#707070] hover:text-[#A8E063] transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-4">Légal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-[#707070] hover:text-[#A8E063] transition-colors"
                >
                  Confidentialité
                </a>
              </li>

              <li>
                <a
                  href="/delete-account"
                  className="text-[#707070] hover:text-[#A8E063] transition-colors"
                >
                  Supprimer mon compte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#707070] text-sm">
            © 2025 NutriFlow. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Mail, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Github, href: "#" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-[#707070] hover:text-[#A8E063] hover:border-[#A8E063] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
