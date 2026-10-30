"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock, Lock, ArrowRight, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    sector: "",
    frictionPoint: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Anti-spam honeypot
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Une erreur est survenue lors de l'envoi de votre demande.");
      }

      // Succès confirmé par le serveur
      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        company: "",
        sector: "",
        frictionPoint: "",
        honeypot: "",
      });
    } catch (err: any) {
      // En cas d'erreur, statut "error", message affiché, champs conservés !
      setStatus("error");
      setErrorMessage(
        err.message || "Impossible de joindre le serveur. Veuillez vérifier votre connexion ou réessayer."
      );
    }
  };

  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-[#F7FAFE] border-t border-[#E2E9F3] relative">
      {/* Ancre de secours pour liens vers #diagnostic */}
      <div id="diagnostic" className="sr-only" />

      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E9F3] shadow-sm relative">
          
          {/* En-tête du formulaire */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF6EA] text-[#ED7410] text-xs font-semibold mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>30 minutes sans frais ni engagement</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">
              Demandez votre diagnostic gratuit
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#405C82] max-w-lg mx-auto">
              Dites-nous quelle tâche manuelle freine votre entreprise. Nous vous répondons avec une estimation chiffrée du temps et des coûts récupérables.
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-200">
              <div className="w-16 h-16 rounded-full bg-[#E4F4EC] text-[#1D9E75] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A2838]">
                Demande bien reçue !
              </h3>
              <p className="text-sm sm:text-base text-[#405C82] max-w-md mx-auto leading-relaxed">
                Un expert Nomira étudie votre point de friction et vous contactera sous 24h ouvrées avec une estimation préliminaire.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/212661574247?text=Bonjour%20Nomira,%20je%20viens%20de%20remplir%20le%20formulaire%20de%20diagnostic."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1D9E75] font-semibold text-sm hover:underline"
                >
                  <span>Échanger en direct sur WhatsApp dès maintenant</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-xs text-[#6784B0] hover:text-[#1A2838] underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Champ Honeypot invisible */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="form-hp">Ne pas remplir ce champ</label>
                <input
                  type="text"
                  id="form-hp"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nom et prénom */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="full-name"
                    className="block text-xs sm:text-sm font-semibold text-[#1A2838]"
                  >
                    Nom et prénom <span className="text-[#ED7410]">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="ex. Karim Bennani"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-[#1A2838] placeholder:text-[#93A9C7] focus:outline-none focus:border-[#ED7410] focus:ring-1 focus:ring-[#ED7410] transition-colors text-sm"
                  />
                </div>

                {/* Téléphone ou WhatsApp */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-semibold text-[#1A2838]"
                  >
                    Téléphone ou WhatsApp <span className="text-[#ED7410]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+212 6 XX XX XX XX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-[#1A2838] placeholder:text-[#93A9C7] focus:outline-none focus:border-[#ED7410] focus:ring-1 focus:ring-[#ED7410] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nom de l'entreprise */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="company-name"
                    className="block text-xs sm:text-sm font-semibold text-[#1A2838]"
                  >
                    Nom de votre entreprise <span className="text-[#ED7410]">*</span>
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ex. Cabinet Médical Anfa"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-[#1A2838] placeholder:text-[#93A9C7] focus:outline-none focus:border-[#ED7410] focus:ring-1 focus:ring-[#ED7410] transition-colors text-sm"
                  />
                </div>

                {/* Secteur d'activité */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="sector"
                    className="block text-xs sm:text-sm font-semibold text-[#1A2838]"
                  >
                    Secteur d'activité <span className="text-[#ED7410]">*</span>
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-[#1A2838] bg-white focus:outline-none focus:border-[#ED7410] focus:ring-1 focus:ring-[#ED7410] transition-colors text-sm"
                  >
                    <option value="" disabled>Sélectionnez un secteur</option>
                    <option value="Santé & Cabinets médicaux">Santé &amp; Cabinets médicaux</option>
                    <option value="Formation & Établissements">Formation &amp; Établissements</option>
                    <option value="Commerces & Distribution">Commerces &amp; Distribution</option>
                    <option value="Services B2B & Conseil">Services B2B &amp; Conseil</option>
                    <option value="Industrie & Logistique">Industrie &amp; Logistique</option>
                    <option value="Autre secteur spécifique">Autre secteur spécifique</option>
                  </select>
                </div>
              </div>

              {/* Point de friction */}
              <div className="space-y-1.5">
                <label
                  htmlFor="friction"
                  className="block text-xs sm:text-sm font-semibold text-[#1A2838]"
                >
                  Quel est votre point de friction ou la tâche qui vous fait perdre le plus de temps ?{" "}
                  <span className="text-[#ED7410]">*</span>
                </label>
                <textarea
                  id="friction"
                  name="frictionPoint"
                  required
                  rows={3}
                  value={formData.frictionPoint}
                  onChange={handleChange}
                  placeholder="Exemple : Nous passons 3 heures par semaine à ressaisir manuellement les devis dans notre logiciel de facturation et à relancer les impayés un par un sur WhatsApp..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-[#1A2838] placeholder:text-[#93A9C7] focus:outline-none focus:border-[#ED7410] focus:ring-1 focus:ring-[#ED7410] transition-colors text-sm resize-none"
                />
              </div>

              {/* Message d'erreur en cas de rejet réseau sans effacer les champs */}
              {errorMessage && (
                <div
                  role="alert"
                  className="p-3.5 rounded-lg bg-[#FBE9E6] border border-[#ffdad6] text-xs sm:text-sm text-[#A82D18] font-medium animate-in fade-in duration-150"
                >
                  {errorMessage}
                </div>
              )}

              {/* Bouton de soumission */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-[#ED7410] hover:bg-[#d86507] active:bg-[#c55e0b] text-white font-semibold text-sm sm:text-base py-3.5 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA23C]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmission en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Réserver mon diagnostic gratuit (30 min)</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Badges de Réassurance */}
              <div className="pt-3 flex flex-wrap items-center justify-between text-xs text-[#6784B0] gap-2 border-t border-[#E2E9F3]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1D9E75]" />
                  <span>Réponse sous 24h ouvrées</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#1D9E75]" />
                  <span>Données 100 % confidentielles (conformité CNDP &amp; RGPD)</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
