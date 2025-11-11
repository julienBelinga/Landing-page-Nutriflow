'use client';

import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { useState } from 'react';
import { Trash2, AlertTriangle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouterez la logique pour envoyer la demande de suppression
    console.log('Demande de suppression:', { email, reason });
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
              Suppression de compte
            </h1>
            <p className="text-lg text-[#707070] max-w-2xl mx-auto">
              Nous sommes désolés de vous voir partir. Vous pouvez demander la suppression 
              de votre compte et de toutes vos données personnelles.
            </p>
          </div>

          {/* Avertissement */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#2E2E2E] mb-2">
                  Attention : Cette action est irréversible
                </h3>
                <ul className="text-[#707070] space-y-2 text-sm">
                  <li>• Toutes vos données personnelles seront définitivement supprimées</li>
                  <li>• Votre historique de repas et de tracking sera effacé</li>
                  <li>• Vos abonnements actifs seront annulés</li>
                  <li>• Vous ne pourrez plus accéder à votre compte</li>
                  <li>• Cette action ne peut pas être annulée</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          {!submitted ? (
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E5E5]">
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
                Demande de suppression
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                    Adresse email du compte *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full"
                  />
                  <p className="text-xs text-[#707070] mt-2">
                    Veuillez entrer l'adresse email associée à votre compte NutriFlow
                  </p>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-[#2E2E2E] mb-2">
                    Raison de la suppression (optionnel)
                  </label>
                  <Textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Dites-nous pourquoi vous souhaitez supprimer votre compte..."
                    className="w-full min-h-[120px]"
                  />
                  <p className="text-xs text-[#707070] mt-2">
                    Vos commentaires nous aident à améliorer notre service
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6 text-lg rounded-xl"
                  >
                    Demander la suppression
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.history.back()}
                    className="flex-1 py-6 text-lg rounded-xl border-2"
                  >
                    Annuler
                  </Button>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                <p className="text-sm text-[#707070]">
                  <strong>Besoin d'aide ?</strong> Si vous rencontrez des problèmes avec votre compte, 
                  notre équipe support peut vous aider. Contactez-nous à{' '}
                  <a href="mailto:support@nutriflow.app" className="text-[#A8E063] hover:underline">
                    support@nutriflow.app
                  </a>
                </p>
              </div>
            </div>
          ) : (
            // Message de confirmation
            <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E5E5E5] text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                Demande reçue
              </h2>
              <p className="text-lg text-[#707070] mb-6 max-w-2xl mx-auto">
                Votre demande de suppression de compte a été enregistrée. Vous recevrez un email 
                de confirmation à <strong>{email}</strong> dans les prochaines minutes.
              </p>
              <p className="text-[#707070] mb-8">
                Votre compte et toutes vos données seront supprimés dans un délai de 30 jours 
                conformément au RGPD. Si vous changez d'avis, vous pouvez annuler cette demande 
                en cliquant sur le lien dans l'email de confirmation.
              </p>
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-[#A8E063] to-[#7BC041] hover:opacity-90 text-white px-8 py-6 rounded-xl text-lg"
              >
                Retour à l'accueil
              </Button>
            </div>
          )}

          {/* Informations légales */}
          <div className="mt-12 text-center">
            <p className="text-sm text-[#707070]">
              Pour plus d'informations sur le traitement de vos données, consultez notre{' '}
              <a href="/privacy-policy" className="text-[#A8E063] hover:underline font-medium">
                Politique de confidentialité
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

