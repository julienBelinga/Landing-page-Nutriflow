'use client';

import { Leaf, Mail, Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FAFAFA] to-white border-t border-[#E5E5E5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A8E063] to-[#7BC041] flex items-center justify-center shadow-md">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#2E2E2E]">NutriFlow</span>
            </div>
            <p className="text-[#707070]">
              L'application de tracking de calories intelligente qui vous accompagne vers une meilleure santé.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-4">Produit</h4>
            <ul className="space-y-3">
              {['Fonctionnalités', 'Tarifs', 'Démo', 'Télécharger'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#707070] hover:text-[#A8E063] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {['À propos', 'Blog', 'Carrières', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#707070] hover:text-[#A8E063] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#2E2E2E] mb-4">Légal</h4>
            <ul className="space-y-3">
              {['Confidentialité', 'CGU', 'Cookies', 'Mentions légales'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#707070] hover:text-[#A8E063] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#707070] text-sm">
            © 2024 NutriFlow. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Mail, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Github, href: '#' },
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
