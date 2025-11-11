'use client';

import { Camera, Target, PieChart, Cloud, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Tracking de vos repas',
    description: 'Analysez vos repas instantanément grâce à l\'IA. Prenez une photo et obtenez les informations nutritionnelles complètes en quelques secondes.',
    color: '#A8E063',
  },
  {
    icon: TrendingUp,
    title: 'Tracking de vos activités',
    description: 'Suivez vos dépenses caloriques quotidiennes et vos exercices pour maintenir un équilibre parfait entre alimentation et activité physique.',
    color: '#A7D8F8',
  },
  {
    icon: Target,
    title: 'Calcul de vos objectifs',
    description: 'Définissez et atteignez vos objectifs personnalisés avec des paliers progressifs adaptés à votre métabolisme et votre style de vie.',
    color: '#C9A9FF',
  },
  {
    icon: PieChart,
    title: 'Affichage détaillé des nutriments',
    description: 'Visualisez en détail vos macronutriments et micronutriments pour optimiser votre alimentation et atteindre vos objectifs santé.',
    color: '#7BC041',
  },
  {
    icon: Cloud,
    title: 'Synchronisation Cloud',
    description: 'Accédez à vos données partout, à tout moment. Vos informations sont synchronisées en temps réel sur tous vos appareils.',
    color: '#A8E063',
  },
  {
    icon: Zap,
    title: 'Intelligence artificielle',
    description: 'Notre IA apprend de vos habitudes pour vous proposer des recommandations personnalisées et améliorer votre expérience au quotidien.',
    color: '#C9A9FF',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-[#E5E5E5]">
            <span className="text-sm font-medium text-[#A8E063]">Fonctionnalités</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Tout ce dont vous avez besoin pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8E063] to-[#7BC041]">
              réussir
            </span>
          </h2>

          <p className="text-lg text-[#707070] max-w-2xl mx-auto">
            NutriFlow combine technologie de pointe et simplicité d'utilisation pour transformer votre approche de la nutrition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E5] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ backgroundColor: feature.color }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                  style={{
                    backgroundColor: `${feature.color}15`,
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: feature.color }}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                  {feature.title}
                </h3>

                <p className="text-[#707070] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
