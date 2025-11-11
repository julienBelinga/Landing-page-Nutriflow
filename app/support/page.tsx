"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  CheckCircle,
  HelpCircle,
  Book,
  Bug,
  CreditCard,
  Settings,
  Smartphone,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouterez la logique pour envoyer la demande de support
    console.log("Demande de support:", formData);
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

  const supportCategories = [
    {
      icon: Bug,
      title: "Problème technique",
      value: "bug",
      description: "Signaler un bug ou une erreur",
    },
    {
      icon: CreditCard,
      title: "Facturation",
      value: "billing",
      description: "Questions sur les paiements",
    },
    {
      icon: Settings,
      title: "Compte",
      value: "account",
      description: "Gestion de votre compte",
    },
    {
      icon: Smartphone,
      title: "Utilisation",
      value: "usage",
      description: "Aide sur l'utilisation de l'app",
    },
    {
      icon: HelpCircle,
      title: "Autre",
      value: "other",
      description: "Autres questions",
    },
  ];

  const faqItems = [
    {
      question: "Comment puis-je réinitialiser mon mot de passe ?",
      answer:
        "Pour réinitialiser votre mot de passe, cliquez sur 'Mot de passe oublié' sur l'écran de connexion. Vous recevrez un email avec un lien pour créer un nouveau mot de passe.",
    },
    {
      question: "Comment fonctionne l'analyse IA des repas ?",
      answer:
        "Prenez simplement une photo de votre repas. Notre IA analyse l'image pour identifier les aliments et calculer automatiquement les calories et valeurs nutritionnelles. Vous pouvez ensuite ajuster les portions si nécessaire.",
    },
    {
      question: "Puis-je utiliser NutriFlow sur plusieurs appareils ?",
      answer:
        "Oui ! Votre compte NutriFlow se synchronise automatiquement entre tous vos appareils. Connectez-vous simplement avec les mêmes identifiants sur chaque appareil.",
    },
    {
      question: "Comment annuler mon abonnement ?",
      answer:
        "Vous pouvez annuler votre abonnement à tout moment depuis les paramètres de votre compte, section 'Abonnement'. L'annulation prendra effet à la fin de votre période de facturation actuelle.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Absolument. Nous utilisons un cryptage de niveau bancaire (SSL/TLS) pour protéger toutes vos données. Consultez notre politique de confidentialité pour plus de détails.",
    },
    {
      question: "L'application fonctionne-t-elle hors ligne ?",
      answer:
        "Certaines fonctionnalités de base sont disponibles hors ligne, notamment la consultation de votre historique récent. Cependant, l'analyse IA des repas nécessite une connexion internet.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#A8E063]/20 to-[#7BC041]/20 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-[#7BC041]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
              Centre de support
            </h1>
            <p className="text-lg text-[#707070] max-w-2xl mx-auto">
              Notre équipe est là pour vous aider. Trouvez des réponses rapides
              ou contactez-nous directement.
            </p>
          </div>

          {/* Moyens de contact rapides */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A8E063]/10 rounded-full mb-4">
                <Mail className="w-6 h-6 text-[#7BC041]" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">Email</h3>
              <p className="text-sm text-[#707070] mb-3">
                Réponse sous 24h
              </p>
              <a
                href="mailto:support@nutriflow.app"
                className="text-[#7BC041] hover:underline font-medium text-sm"
              >
                support@nutriflow.app
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A8E063]/10 rounded-full mb-4">
                <Phone className="w-6 h-6 text-[#7BC041]" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">Téléphone</h3>
              <p className="text-sm text-[#707070] mb-3">
                Lun-Ven 9h-18h
              </p>
              <a
                href="tel:+33123456789"
                className="text-[#7BC041] hover:underline font-medium text-sm"
              >
                +33 1 23 45 67 89
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A8E063]/10 rounded-full mb-4">
                <Clock className="w-6 h-6 text-[#7BC041]" />
              </div>
              <h3 className="font-bold text-[#2E2E2E] mb-2">
                Heures d'ouverture
              </h3>
              <p className="text-sm text-[#707070] mb-1">
                Lundi - Vendredi
              </p>
              <p className="text-[#7BC041] font-medium text-sm">
                9h00 - 18h00 CET
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Formulaire de contact */}
            {!submitted ? (
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E5E5]">
                <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
                  Contactez-nous
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      {supportCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-[#2E2E2E]">
                      Sujet *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Problème de synchronisation"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#2E2E2E]">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre problème ou votre question en détail..."
                      className="mt-2 min-h-[150px]"
                    />
                    <p className="text-xs text-[#707070] mt-2">
                      Plus votre description est détaillée, plus nous pourrons
                      vous aider rapidement
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#A8E063] to-[#7BC041] hover:opacity-90 text-white py-6 text-lg rounded-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </Button>
                </form>
              </div>
            ) : (
              // Message de confirmation
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E5E5]">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                    Message envoyé !
                  </h2>
                  <p className="text-[#707070] mb-6">
                    Merci pour votre message. Notre équipe de support vous
                    répondra dans les plus brefs délais à{" "}
                    <strong>{formData.email}</strong>.
                  </p>
                  <div className="bg-gradient-to-br from-[#A8E063]/10 to-[#7BC041]/10 rounded-xl p-6 mb-6">
                    <p className="text-sm text-[#707070]">
                      <strong>Numéro de ticket :</strong> #{Math.floor(Math.random() * 1000000)}
                    </p>
                    <p className="text-sm text-[#707070] mt-2">
                      Vous recevrez une copie de votre demande par email.
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        category: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="w-full py-6 rounded-xl text-lg border-2"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              </div>
            )}

            {/* Catégories de support */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E5E5]">
                <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
                  Comment pouvons-nous vous aider ?
                </h2>
                <div className="space-y-3">
                  {supportCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div
                        key={category.value}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#FAFAFA] transition-colors cursor-pointer border border-transparent hover:border-[#E5E5E5]"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-[#A8E063]/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#7BC041]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#2E2E2E] mb-1">
                            {category.title}
                          </h3>
                          <p className="text-sm text-[#707070]">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Documentation */}
              <div className="bg-gradient-to-br from-[#A8E063]/10 to-[#7BC041]/10 rounded-2xl p-8 border border-[#E5E5E5]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Book className="w-6 h-6 text-[#7BC041]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2E2E2E] mb-2">
                      Documentation
                    </h3>
                    <p className="text-sm text-[#707070] mb-4">
                      Consultez nos guides détaillés et tutoriels pour tirer le
                      meilleur parti de NutriFlow.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-[#7BC041] hover:underline font-medium text-sm"
                    >
                      Voir la documentation →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12 border border-[#E5E5E5]">
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-8 text-center">
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqItems.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#7BC041] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#2E2E2E] mb-2">
                        {item.question}
                      </h3>
                      <p className="text-sm text-[#707070]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-[#E5E5E5] text-center">
              <p className="text-[#707070] mb-4">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <Button
                onClick={() =>
                  document
                    .querySelector("form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className="px-8 py-6 rounded-xl text-lg border-2"
              >
                Contactez le support
              </Button>
            </div>
          </div>

          {/* Ressources supplémentaires */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center">
              <h3 className="font-bold text-[#2E2E2E] mb-2">
                Statut du service
              </h3>
              <p className="text-sm text-[#707070] mb-4">
                Vérifiez l'état de nos services
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-600">
                  Tous les systèmes fonctionnent
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center">
              <h3 className="font-bold text-[#2E2E2E] mb-2">
                Rejoignez la communauté
              </h3>
              <p className="text-sm text-[#707070] mb-4">
                Échangez avec d'autres utilisateurs
              </p>
              <a
                href="#"
                className="text-[#7BC041] hover:underline font-medium text-sm"
              >
                Forum communautaire →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] text-center">
              <h3 className="font-bold text-[#2E2E2E] mb-2">
                Suggérer une amélioration
              </h3>
              <p className="text-sm text-[#707070] mb-4">
                Partagez vos idées avec nous
              </p>
              <a
                href="/feature-request"
                className="text-[#7BC041] hover:underline font-medium text-sm"
              >
                Faire une suggestion →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

