"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  FileText,
  CheckCircle,
  Smartphone,
  User,
  Shield,
  AlertTriangle,
  XCircle,
  Mail,
  Scale,
  Gavel,
} from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A8E063]/20 rounded-full mb-6">
              <FileText className="w-8 h-8 text-[#7BC041]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
              Conditions d'utilisation
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
                Bienvenue sur <strong>NutriFlow</strong> ! Ces conditions
                d'utilisation régissent votre accès et votre utilisation de
                notre application mobile et de nos services. En utilisant
                NutriFlow, vous acceptez d'être lié par ces conditions. Si vous
                n'acceptez pas ces conditions, veuillez ne pas utiliser notre
                service.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  1. Acceptation des conditions
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  En accédant ou en utilisant NutriFlow, vous acceptez d'être
                  lié par ces conditions d'utilisation et toutes les lois et
                  réglementations applicables. Si vous n'acceptez pas ces
                  conditions, vous ne devez pas utiliser notre service.
                </p>
                <p>
                  Ces conditions s'appliquent à tous les utilisateurs de
                  l'application, y compris les visiteurs, les utilisateurs
                  enregistrés et les abonnés.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  2. Description du service
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  NutriFlow est une application mobile de suivi nutritionnel qui
                  permet aux utilisateurs de :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Suivre leurs repas et leurs apports nutritionnels quotidiens
                  </li>
                  <li>
                    Analyser des photos de repas grâce à l'intelligence
                    artificielle pour identifier les aliments
                  </li>
                  <li>
                    Calculer leurs besoins caloriques et nutritionnels
                    personnalisés
                  </li>
                  <li>
                    Recevoir des recommandations nutritionnelles adaptées à
                    leurs objectifs
                  </li>
                  <li>Suivre leur progression vers leurs objectifs de santé</li>
                </ul>
                <p className="mt-4">
                  Nous nous réservons le droit de modifier, suspendre ou
                  interrompre tout ou partie du service à tout moment, avec ou
                  sans préavis.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <User className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  3. Compte utilisateur
                </h2>
              </div>
              <div className="ml-9 space-y-4 text-[#707070]">
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    3.1 Création de compte
                  </h3>
                  <p>
                    Pour utiliser certaines fonctionnalités de NutriFlow, vous
                    devez créer un compte. Vous vous engagez à :
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Fournir des informations exactes, complètes et à jour
                    </li>
                    <li>
                      Maintenir et mettre à jour rapidement vos informations de
                      compte
                    </li>
                    <li>
                      Maintenir la sécurité de votre mot de passe et de votre
                      compte
                    </li>
                    <li>
                      Être responsable de toutes les activités qui se produisent
                      sous votre compte
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    3.2 Âge minimum
                  </h3>
                  <p>
                    Vous devez avoir au moins 16 ans pour créer un compte et
                    utiliser NutriFlow. Si vous avez moins de 16 ans, vous devez
                    obtenir l'autorisation d'un parent ou d'un tuteur légal.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    3.3 Responsabilité du compte
                  </h3>
                  <p>
                    Vous êtes seul responsable de la confidentialité de votre
                    compte et de votre mot de passe. Vous acceptez de nous
                    notifier immédiatement de toute utilisation non autorisée de
                    votre compte.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  4. Utilisation acceptable
                </h2>
              </div>
              <div className="ml-9 space-y-4 text-[#707070]">
                <p>
                  Vous vous engagez à utiliser NutriFlow uniquement à des fins
                  légales et de manière qui ne viole pas les droits d'autrui.
                  Vous acceptez de ne pas :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Utiliser le service de manière à violer les lois ou
                    réglementations applicables
                  </li>
                  <li>
                    Transmettre, publier ou partager du contenu illégal,
                    nuisible, menaçant, abusif, harcelant, diffamatoire,
                    vulgaire, obscène ou autrement répréhensible
                  </li>
                  <li>
                    Tenter d'accéder de manière non autorisée à d'autres
                    comptes, systèmes informatiques ou réseaux connectés à
                    NutriFlow
                  </li>
                  <li>
                    Utiliser des robots, scripts automatisés ou autres moyens
                    pour accéder au service sans autorisation
                  </li>
                  <li>
                    Copier, modifier, distribuer, vendre ou louer tout ou partie
                    de notre service
                  </li>
                  <li>
                    Reverse engineer, décompiler ou désassembler le service
                  </li>
                  <li>
                    Utiliser le service pour des activités commerciales non
                    autorisées
                  </li>
                  <li>
                    Interférer ou perturber le fonctionnement du service ou des
                    serveurs et réseaux connectés
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  5. Propriété intellectuelle
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Tous les contenus, fonctionnalités et matériel disponibles sur
                  NutriFlow, y compris mais sans s'y limiter : le texte, les
                  graphiques, les logos, les icônes, les images, les clips
                  audio, les téléchargements numériques et les compilations de
                  données, sont la propriété de NutriFlow ou de ses fournisseurs
                  de contenu et sont protégés par les lois françaises et
                  internationales sur le droit d'auteur, les marques de commerce
                  et autres droits de propriété intellectuelle.
                </p>
                <p>
                  Vous n'acquérez aucun droit de propriété sur le service ou son
                  contenu en utilisant NutriFlow. Vous pouvez utiliser le
                  service uniquement pour votre usage personnel et non
                  commercial.
                </p>
                <p>
                  Le contenu que vous créez, téléchargez ou publiez sur
                  NutriFlow (telles que les photos de repas) reste votre
                  propriété. En utilisant notre service, vous nous accordez une
                  licence mondiale, non exclusive, gratuite et transférable pour
                  utiliser, reproduire, modifier et afficher ce contenu dans le
                  cadre de la fourniture et de l'amélioration de nos services.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  6. Avertissement médical
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  <strong>Important :</strong> NutriFlow est un outil de suivi
                  nutritionnel et ne constitue pas un avis médical, un
                  diagnostic ou un traitement. Les informations fournies par
                  l'application sont à des fins éducatives et informatives
                  uniquement.
                </p>
                <p>Vous reconnaissez et acceptez que :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Les calculs nutritionnels et les recommandations sont des
                    estimations et peuvent ne pas être exacts à 100%
                  </li>
                  <li>
                    L'analyse par intelligence artificielle des photos de repas
                    peut contenir des erreurs
                  </li>
                  <li>
                    Vous devez consulter un professionnel de la santé qualifié
                    avant de modifier votre régime alimentaire ou votre mode de
                    vie
                  </li>
                  <li>
                    NutriFlow ne remplace pas les conseils d'un médecin, d'un
                    nutritionniste ou d'un autre professionnel de la santé
                  </li>
                  <li>
                    Si vous avez des problèmes de santé, des allergies ou des
                    conditions médicales, consultez toujours un professionnel de
                    la santé
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  7. Limitation de responsabilité
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Dans les limites permises par la loi applicable, NutriFlow et
                  ses dirigeants, employés, agents et partenaires ne seront pas
                  responsables de :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Toute perte ou dommage indirect, accessoire, spécial,
                    consécutif ou punitif résultant de votre utilisation du
                    service
                  </li>
                  <li>
                    Toute perte de profits, de revenus, de données ou d'autres
                    pertes intangibles
                  </li>
                  <li>
                    Toute erreur, inexactitude ou omission dans le contenu du
                    service
                  </li>
                  <li>
                    Toute interruption ou cessation de transmission vers ou
                    depuis le service
                  </li>
                  <li>
                    Toute décision prise ou action entreprise en vous fiant aux
                    informations fournies par NutriFlow
                  </li>
                  <li>
                    Toute perte ou dommage résultant de l'utilisation de
                    l'intelligence artificielle pour analyser vos photos de
                    repas
                  </li>
                </ul>
                <p className="mt-4">
                  Notre responsabilité totale envers vous pour toutes les
                  réclamations liées au service ne dépassera pas le montant que
                  vous avez payé pour utiliser le service au cours des 12
                  derniers mois, ou 50 euros, selon le montant le plus élevé.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  8. Résiliation
                </h2>
              </div>
              <div className="ml-9 space-y-4 text-[#707070]">
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    8.1 Résiliation par vous
                  </h3>
                  <p>
                    Vous pouvez résilier votre compte à tout moment en
                    supprimant votre compte depuis les paramètres de
                    l'application ou en nous contactant. La suppression de votre
                    compte entraînera la suppression de vos données personnelles
                    conformément à notre politique de confidentialité.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    8.2 Résiliation par nous
                  </h3>
                  <p>
                    Nous nous réservons le droit de suspendre ou de résilier
                    votre accès au service immédiatement, sans préavis ni
                    responsabilité, pour quelque raison que ce soit, y compris
                    si vous violez ces conditions d'utilisation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    8.3 Effets de la résiliation
                  </h3>
                  <p>
                    Après la résiliation, votre droit d'utiliser le service
                    cessera immédiatement. Toutes les dispositions de ces
                    conditions qui, par leur nature, doivent survivre à la
                    résiliation, continueront d'être en vigueur après la
                    résiliation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  9. Abonnements et paiements
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Certaines fonctionnalités de NutriFlow peuvent nécessiter un
                  abonnement payant. Si vous choisissez de vous abonner :
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Les prix sont indiqués dans l'application et peuvent être
                    modifiés à tout moment
                  </li>
                  <li>
                    Les paiements sont traités par des prestataires de paiement
                    tiers sécurisés
                  </li>
                  <li>
                    Votre abonnement sera automatiquement renouvelé sauf si vous
                    l'annulez avant la fin de la période de facturation
                  </li>
                  <li>
                    Les remboursements sont soumis à notre politique de
                    remboursement, disponible sur demande
                  </li>
                  <li>
                    Vous pouvez annuler votre abonnement à tout moment depuis
                    les paramètres de votre compte ou via les stores
                    d'applications
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  10. Modifications des conditions
                </h2>
              </div>
              <div className="ml-9 text-[#707070]">
                <p>
                  Nous nous réservons le droit de modifier ces conditions
                  d'utilisation à tout moment. Nous vous informerons de tout
                  changement important par email ou via une notification dans
                  l'application. La date de "dernière mise à jour" en haut de
                  cette page indique quand ces conditions ont été révisées pour
                  la dernière fois.
                </p>
                <p className="mt-4">
                  Votre utilisation continue du service après la publication des
                  modifications constitue votre acceptation des nouvelles
                  conditions. Si vous n'acceptez pas les modifications, vous
                  devez cesser d'utiliser le service.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Gavel className="w-6 h-6 text-[#7BC041] flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  11. Loi applicable et juridiction
                </h2>
              </div>
              <div className="ml-9 space-y-3 text-[#707070]">
                <p>
                  Ces conditions d'utilisation sont régies et interprétées
                  conformément aux lois françaises, sans égard aux principes de
                  conflits de lois.
                </p>
                <p>
                  Tout litige découlant de ou lié à ces conditions ou à votre
                  utilisation de NutriFlow sera soumis à la juridiction
                  exclusive des tribunaux français compétents.
                </p>
                <p>
                  Si une disposition de ces conditions est jugée invalide ou
                  inapplicable, les dispositions restantes continueront d'être
                  en vigueur et la disposition invalide sera remplacée par une
                  disposition valide qui se rapproche le plus de l'intention de
                  la disposition originale.
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
                  Pour toute question concernant ces conditions d'utilisation,
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
                  Nous nous efforçons de répondre à toutes les demandes dans un
                  délai raisonnable.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
