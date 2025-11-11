'use client';

import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Mensuel',
    price: '4,99',
    period: 'mois',
    description: 'Parfait pour essayer NutriFlow',
    popular: false,
    features: [
      'Tracking illimité des repas',
      'Analyse nutritionnelle par IA',
      'Suivi des activités',
      'Calcul des objectifs personnalisés',
      'Affichage détaillé des nutriments',
      'Synchronisation Cloud',
      'Support prioritaire',
    ],
  },
  {
    name: 'Annuel',
    price: '49,99',
    period: 'an',
    description: 'Économisez 17% avec l\'abonnement annuel',
    popular: true,
    features: [
      'Tout du plan mensuel',
      'Économisez 10€ par an',
      'Accès prioritaire aux nouvelles fonctionnalités',
      'Statistiques avancées',
      'Export de vos données',
      'Programmes nutritionnels personnalisés',
      'Support premium 24/7',
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-[#E5E5E5]">
            <span className="text-sm font-medium text-[#C9A9FF]">Tarifs</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Un prix simple et{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8E063] to-[#7BC041]">
              transparent
            </span>
          </h2>

          <p className="text-lg text-[#707070] max-w-2xl mx-auto">
            Choisissez le plan qui vous convient. Changez ou annulez à tout moment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? 'border-[#A8E063] shadow-xl'
                  : 'border-[#E5E5E5] hover:border-[#A8E063]/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#A8E063] to-[#7BC041] text-white px-6 py-2 rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-semibold">Plus populaire</span>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#707070]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-6xl font-bold text-[#2E2E2E]">
                    {plan.price}€
                  </span>
                  <span className="text-xl text-[#707070]">/ {plan.period}</span>
                </div>
                {plan.name === 'Annuel' && (
                  <div className="mt-2 text-sm text-[#A8E063] font-medium">
                    Soit 4,17€ par mois
                  </div>
                )}
              </div>

              <Button
                size="lg"
                className={`w-full mb-8 py-6 text-lg font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#A8E063] to-[#7BC041] hover:from-[#7BC041] hover:to-[#A8E063] text-white'
                    : 'bg-white hover:bg-[#FAFAFA] text-[#2E2E2E] border-2 border-[#E5E5E5]'
                }`}
              >
                Commencer maintenant
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: plan.popular ? '#A8E06320' : '#E5E5E5',
                      }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{
                          color: plan.popular ? '#A8E063' : '#707070',
                        }}
                      />
                    </div>
                    <span className="text-[#2E2E2E]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#707070]">
            Tous les plans incluent une garantie satisfait ou remboursé de 14 jours
          </p>
        </div>
      </div>
    </section>
  );
}
