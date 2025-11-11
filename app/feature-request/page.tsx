"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useState } from "react";
import { Lightbulb, CheckCircle, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function FeatureRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    featureTitle: "",
    description: "",
    priority: "medium",
    category: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouterez la logique pour envoyer la demande de fonctionnalité
    console.log("Demande de fonctionnalité:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const categories = [
    "Tracking nutritionnel",
    "Interface utilisateur",
    "Rapports et statistiques",
    "Intelligence artificielle",
    "Intégrations",
    "Personnalisation",
    "Social et communauté",
    "Autre",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#A8E063]/20 to-[#7BC041]/20 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-[#7BC041]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
              Demande de fonctionnalité
            </h1>
            <p className="text-lg text-[#707070] max-w-2xl mx-auto">
              Votre avis compte ! Aidez-nous à améliorer NutriFlow en nous
              suggérant les fonctionnalités que vous aimeriez voir dans
              l'application.
            </p>
          </div>

          {/* Avantages de participer */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A8E063]/10 rounded-full mb-4">
                <Star className="w-6 h-6 text-[#7BC041]" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">
                Influencez le produit
              </h3>
              <p className="text-sm text-[#707070]">
                Vos idées façonnent l'avenir de NutriFlow
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A8E063]/10 rounded-full mb-4">
                <Zap className="w-6 h-6 text-[#7BC041]" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">
                Priorité aux demandes
              </h3>
              <p className="text-sm text-[#707070]">
                Les suggestions populaires sont développées en priorité
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A8E063]/10 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-[#7BC041]" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">
                Suivi transparent
              </h3>
              <p className="text-sm text-[#707070]">
                Restez informé de l'avancement de votre suggestion
              </p>
            </div>
          </div>

          {/* Formulaire */}
          {!submitted ? (
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E5E5]">
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
                Partagez votre idée
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-[#2E2E2E]">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#2E2E2E]">
                      Adresse email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.com"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category" className="text-[#2E2E2E]">
                    Catégorie *
                  </Label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="featureTitle" className="text-[#2E2E2E]">
                    Titre de la fonctionnalité *
                  </Label>
                  <Input
                    id="featureTitle"
                    name="featureTitle"
                    type="text"
                    required
                    value={formData.featureTitle}
                    onChange={handleChange}
                    placeholder="Ex: Mode sombre pour l'application"
                    className="mt-2"
                  />
                  <p className="text-xs text-[#707070] mt-2">
                    Résumez votre idée en quelques mots
                  </p>
                </div>

                <div>
                  <Label htmlFor="description" className="text-[#2E2E2E]">
                    Description détaillée *
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Décrivez en détail la fonctionnalité que vous souhaitez voir dans NutriFlow. Expliquez pourquoi elle serait utile et comment elle pourrait fonctionner..."
                    className="mt-2 min-h-[150px]"
                  />
                  <p className="text-xs text-[#707070] mt-2">
                    Plus votre description est détaillée, mieux nous pourrons
                    comprendre votre besoin
                  </p>
                </div>

                <div>
                  <Label className="text-[#2E2E2E] mb-3 block">
                    Priorité selon vous *
                  </Label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        value: "low",
                        label: "Basse",
                        color: "border-gray-300",
                      },
                      {
                        value: "medium",
                        label: "Moyenne",
                        color: "border-orange-300",
                      },
                      {
                        value: "high",
                        label: "Élevée",
                        color: "border-red-300",
                      },
                    ].map((priority) => (
                      <label
                        key={priority.value}
                        className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.priority === priority.value
                            ? "border-[#7BC041] bg-[#A8E063]/10"
                            : priority.color
                        }`}
                      >
                        <input
                          type="radio"
                          name="priority"
                          value={priority.value}
                          checked={formData.priority === priority.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="font-medium text-[#2E2E2E]">
                          {priority.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#A8E063] to-[#7BC041] hover:opacity-90 text-white py-6 text-lg rounded-xl"
                  >
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Soumettre ma suggestion
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.history.back()}
                    className="flex-1 sm:flex-none py-6 text-lg rounded-xl border-2"
                  >
                    Annuler
                  </Button>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                <p className="text-sm text-[#707070]">
                  <strong>Note :</strong> Toutes les suggestions sont examinées
                  par notre équipe. Nous ne pouvons pas garantir que toutes les
                  fonctionnalités seront développées, mais nous prenons chaque
                  idée au sérieux.
                </p>
              </div>
            </div>
          ) : (
            // Message de confirmation
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E5E5] text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                Merci pour votre suggestion !
              </h2>
              <p className="text-lg text-[#707070] mb-6 max-w-2xl mx-auto">
                Votre demande de fonctionnalité{" "}
                <strong>"{formData.featureTitle}"</strong> a été soumise avec
                succès. Notre équipe produit va l'examiner attentivement.
              </p>
              <div className="bg-gradient-to-br from-[#A8E063]/10 to-[#7BC041]/10 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-[#2E2E2E] mb-3">
                  Prochaines étapes
                </h3>
                <ul className="text-left text-[#707070] space-y-2 max-w-xl mx-auto">
                  <li>
                    ✓ Votre suggestion sera examinée dans les 5 jours ouvrables
                  </li>
                  <li>
                    ✓ Vous recevrez un email de confirmation à{" "}
                    <strong>{formData.email}</strong>
                  </li>
                  <li>
                    ✓ Si votre idée est retenue, nous vous tiendrons informé de
                    son avancement
                  </li>
                  <li>
                    ✓ Vous pourrez voter pour d'autres suggestions de la
                    communauté
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      featureTitle: "",
                      description: "",
                      priority: "medium",
                      category: "",
                    });
                  }}
                  variant="outline"
                  className="px-8 py-6 rounded-xl text-lg border-2"
                >
                  Soumettre une autre idée
                </Button>
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="bg-gradient-to-r from-[#A8E063] to-[#7BC041] hover:opacity-90 text-white px-8 py-6 rounded-xl text-lg"
                >
                  Retour à l'accueil
                </Button>
              </div>
            </div>
          )}

          {/* FAQ */}
          <div className="mt-12 bg-gradient-to-br from-[#A8E063]/5 to-[#7BC041]/5 rounded-2xl p-8 border border-[#E5E5E5]">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h3 className="font-semibold text-[#2E2E2E] mb-2">
                  Combien de temps faut-il pour qu'une fonctionnalité soit
                  développée ?
                </h3>
                <p className="text-[#707070] text-sm">
                  Le temps de développement varie selon la complexité de la
                  fonctionnalité. Les petites améliorations peuvent être
                  disponibles en quelques semaines, tandis que les
                  fonctionnalités plus importantes peuvent prendre plusieurs
                  mois.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] mb-2">
                  Comment sont priorisées les demandes ?
                </h3>
                <p className="text-[#707070] text-sm">
                  Nous priorisons les fonctionnalités en fonction de leur
                  popularité, de leur impact sur l'expérience utilisateur, de
                  leur faisabilité technique et de leur alignement avec notre
                  vision produit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] mb-2">
                  Puis-je voir les suggestions des autres utilisateurs ?
                </h3>
                <p className="text-[#707070] text-sm">
                  Bientôt ! Nous travaillons sur un portail communautaire où
                  vous pourrez consulter, voter et commenter les suggestions
                  d'autres utilisateurs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] mb-2">
                  Que faire si ma suggestion est refusée ?
                </h3>
                <p className="text-[#707070] text-sm">
                  Si une suggestion n'est pas retenue, nous vous expliquerons
                  pourquoi. Cela peut être dû à des contraintes techniques, à
                  une incompatibilité avec notre vision, ou simplement parce que
                  d'autres priorités ont été identifiées. Vos retours restent
                  précieux pour nous !
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
