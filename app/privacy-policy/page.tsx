"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Shield, Lock, Eye, User, Database, Mail, Trash2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A8E063]/20 rounded-full mb-6">
              <Shield className="w-8 h-8 text-[#7BC041]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-lg text-[#707070]">
              Dernière mise à jour : 11 novembre 2025
            </p>
          </div>

          {/* Contenu */}
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12 border border-[#E5E5E5] space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-[#707070] leading-relaxed">
                Chez <strong>NutriFlow</strong>, nous prenons la protection de
                vos données personnelles très au sérieux. Cette politique de
                confidentialité explique comment nous collectons, utilisons,
                partageons et protégeons vos informations lorsque vous utilisez
                notre application.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  1. Données que nous collectons
                </h2>
              </div>
              <div className="ml-9 space-y-4 text-[#707070]">
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    1.1 Informations de compte
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Mot de passe (crypté)</li>
                    <li>Date de naissance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    1.2 Données nutritionnelles
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Informations sur vos repas et aliments consommés</li>
                    <li>
                      Photos de vos repas (si vous choisissez d'en partager)
                    </li>
                    <li>Objectifs nutritionnels et caloriques</li>
                    <li>Historique de tracking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    1.3 Données de santé
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Poids et taille</li>
                    <li>Objectifs de santé</li>
                    <li>Niveau d'activité physique</li>
                    <li>Allergies et restrictions alimentaires</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    1.4 Données techniques
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Adresse IP</li>
                    <li>Type d'appareil et système d'exploitation</li>
                    <li>Identifiant unique de l'appareil</li>
                    <li>Données de géolocalisation (si autorisée)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  2. Comment nous utilisons vos données
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>Nous utilisons vos données pour :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Fournir et personnaliser notre service de tracking
                    nutritionnel
                  </li>
                  <li>
                    Analyser vos repas grâce à notre intelligence artificielle
                  </li>
                  <li>Calculer vos besoins caloriques et nutritionnels</li>
                  <li>Vous envoyer des recommandations personnalisées</li>
                  <li>
                    Améliorer notre application et développer de nouvelles
                    fonctionnalités
                  </li>
                  <li>Assurer la sécurité et prévenir la fraude</li>
                  <li>
                    Vous contacter concernant votre compte ou nos services
                  </li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  3. Protection de vos données
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et
                  organisationnelles pour protéger vos données :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Chiffrement SSL/TLS pour toutes les transmissions de données
                  </li>
                  <li>
                    Cryptage des mots de passe avec des algorithmes de hachage
                    sécurisés
                  </li>
                  <li>
                    Accès restreint aux données personnelles (uniquement le
                    personnel autorisé)
                  </li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Surveillance continue de nos systèmes</li>
                  <li>Conformité aux normes de sécurité internationales</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <User className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  4. Partage de vos données
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Nous ne vendons jamais vos données personnelles. Nous pouvons
                  partager vos données uniquement dans les cas suivants :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Prestataires de services :</strong> Nous travaillons
                    avec des partenaires de confiance (hébergement, paiement,
                    analytics) qui nous aident à fournir notre service. Ils sont
                    contractuellement tenus de protéger vos données.
                  </li>
                  <li>
                    <strong>IA et analyse :</strong> Vos photos de repas sont
                    analysées par notre système d'intelligence artificielle pour
                    identifier les aliments et calculer les valeurs
                    nutritionnelles.
                  </li>
                  <li>
                    <strong>Obligations légales :</strong> Si la loi l'exige ou
                    pour protéger nos droits légaux.
                  </li>
                  <li>
                    <strong>Avec votre consentement :</strong> Dans tout autre
                    cas, uniquement avec votre autorisation explicite.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  5. Vos droits (RGPD)
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Droit d'accès :</strong> Vous pouvez demander une
                    copie de vos données personnelles
                  </li>
                  <li>
                    <strong>Droit de rectification :</strong> Vous pouvez
                    corriger vos données inexactes
                  </li>
                  <li>
                    <strong>Droit à l'effacement :</strong> Vous pouvez demander
                    la suppression de vos données
                  </li>
                  <li>
                    <strong>Droit à la portabilité :</strong> Vous pouvez
                    recevoir vos données dans un format structuré
                  </li>
                  <li>
                    <strong>Droit d'opposition :</strong> Vous pouvez vous
                    opposer au traitement de vos données
                  </li>
                  <li>
                    <strong>Droit à la limitation :</strong> Vous pouvez
                    demander la limitation du traitement
                  </li>
                  <li>
                    <strong>Droit de retirer votre consentement :</strong> À
                    tout moment, sans affecter la licéité du traitement effectué
                    avant le retrait
                  </li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à{" "}
                  <a
                    href="mailto:support@nutriflow.app"
                    className="text-[#A8E063] hover:underline font-medium"
                  >
                    support@nutriflow.app
                  </a>
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  6. Conservation des données
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Nous conservons vos données personnelles aussi longtemps que
                  nécessaire pour :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Fournir nos services (tant que votre compte est actif)
                  </li>
                  <li>Respecter nos obligations légales</li>
                  <li>Résoudre les litiges</li>
                  <li>Faire respecter nos accords</li>
                </ul>
                <p className="mt-4">
                  Lorsque vous supprimez votre compte, vos données personnelles
                  sont supprimées dans un délai de 30 jours, sauf si nous sommes
                  légalement tenus de les conserver plus longtemps.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  7. Cookies et technologies similaires
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Nous utilisons des cookies et technologies similaires pour :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Maintenir votre session connectée</li>
                  <li>Mémoriser vos préférences</li>
                  <li>Analyser l'utilisation de notre application</li>
                  <li>Améliorer l'expérience utilisateur</li>
                </ul>
                <p className="mt-4">
                  Vous pouvez gérer vos préférences de cookies dans les
                  paramètres de votre navigateur ou appareil.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <User className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  8. Utilisateurs mineurs
                </h2>
              </div>
              <div className="ml-9 text-[#707070]">
                <p>
                  Notre service n'est pas destiné aux personnes de moins de 16
                  ans. Nous ne collectons pas sciemment de données personnelles
                  d'enfants de moins de 16 ans. Si vous êtes parent ou tuteur et
                  que vous pensez que votre enfant nous a fourni des données
                  personnelles, veuillez nous contacter.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  9. Transferts internationaux
                </h2>
              </div>
              <div className="ml-9 text-[#707070]">
                <p>
                  Vos données peuvent être transférées et traitées dans des pays
                  en dehors de l'Union Européenne. Dans ce cas, nous nous
                  assurons que des garanties appropriées sont en place
                  conformément au RGPD (clauses contractuelles types, décision
                  d'adéquation, etc.).
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  10. Modifications de cette politique
                </h2>
              </div>
              <div className="ml-9 text-[#707070]">
                <p>
                  Nous pouvons modifier cette politique de confidentialité de
                  temps en temps. Nous vous informerons de tout changement
                  important par email ou via une notification dans
                  l'application. La date de "dernière mise à jour" en haut de
                  cette page indique quand cette politique a été révisée pour la
                  dernière fois.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-[#A8E063]/10 to-[#7BC041]/10 rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                Nous contacter
              </h2>
              <div className="space-y-3 text-[#707070]">
                <p>
                  Pour toute question concernant cette politique de
                  confidentialité ou le traitement de vos données personnelles,
                  vous pouvez nous contacter :
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email :</strong>{" "}
                    <a
                      href="mailto:support@nutriflow.app"
                      className="text-[#7BC041] hover:underline"
                    >
                      support@nutriflow.app
                    </a>
                  </p>
                </div>
                <p className="mt-4 pt-4 border-t border-[#7BC041]/20">
                  Vous avez également le droit de déposer une plainte auprès de
                  la CNIL (Commission Nationale de l'Informatique et des
                  Libertés) si vous estimez que vos droits ne sont pas
                  respectés.
                </p>
              </div>
            </section>

            {/* Lien suppression */}
            <section className="text-center pt-8 border-t border-[#E5E5E5]">
              <p className="text-[#707070] mb-4">
                Vous souhaitez supprimer votre compte et toutes vos données ?
              </p>
              <a
                href="/delete-account"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium hover:underline"
              >
                <Trash2 className="w-4 h-4" />
                Demander la suppression de mon compte
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
