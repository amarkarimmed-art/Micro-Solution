"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock, Lock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    sector: "Santé & Médical",
    frictionPoint: "",
    honeypot: "", // Champ piège anti-spam
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

    // Vérification honeypot
    if (formData.honeypot) {
      // Robot détecté
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue lors de l'envoi.");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        company: "",
        sector: "Santé & Médical",
        frictionPoint: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Erreur de connexion, veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-accent text-xs sm:text-sm font-semibold mb-3">
              <Clock className="w-3.5 h-3.5 text-[#ED7410]" />
              <span>30 minutes sans frais ni engagement</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-4">
              Demandez votre diagnostic gratuit
            </h2>
            <p className="text-base sm:text-lg text-[#1A2838]/80 max-w-2xl mx-auto leading-relaxed">
              Dites-nous quelle tâche manuelle freine votre entreprise. Nous vous répondons avec une estimation chiffrée du temps et des coûts récupérables.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#405C82]/20 shadow-xl p-6 sm:p-10 relative overflow-hidden">
            {/* Ligne d'accent supérieure */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ED7410]" />

            {status === "success" ? (
              <div className="text-center py-12 px-4 animate-in fade-in zoom-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A2838] mb-2">
                  Demande bien reçue !
                </h3>
                <p className="text-base text-[#1A2838]/80 max-w-md mx-auto mb-6">
                  Un consultant Nomira examine votre point de friction et vous recontactera sous 24h ouvrées pour planifier votre échange de 30 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-secondary text-sm px-6 py-2.5"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champ Honeypot invisible pour contrer les bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp-field">Ne pas remplir ce champ</label>
                  <input
                    type="text"
                    id="hp-field"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nom & Prénom */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-[#1A2838] mb-1.5"
                    >
                      Nom et prénom <span className="text-[#ED7410]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="ex. Karim Bennani"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3A5C8A] focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  {/* Téléphone / WhatsApp */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#1A2838] mb-1.5"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3A5C8A] focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Entreprise */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-[#1A2838] mb-1.5"
                    >
                      Nom de votre entreprise <span className="text-[#ED7410]">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="ex. Cabinet Médical Atlas"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3A5C8A] focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  {/* Secteur d'activité */}
                  <div>
                    <label
                      htmlFor="sector"
                      className="block text-sm font-semibold text-[#1A2838] mb-1.5"
                    >
                      Secteur d'activité <span className="text-[#ED7410]">*</span>
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      required
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3A5C8A] focus:border-transparent text-sm transition-all bg-white"
                    >
                      <option value="Santé & Médical">Santé & Cabinets médicaux</option>
                      <option value="Formation & Éducation">Formation & Établissements</option>
                      <option value="Commerces & Distribution">Commerces & Distribution</option>
                      <option value="Services B2B & Conseil">Services B2B & Conseil</option>
                      <option value="Industrie & Logistique">Industrie & Logistique</option>
                      <option value="Autre secteur">Autre secteur spécifique</option>
                    </select>
                  </div>
                </div>

                {/* Point de friction principal */}
                <div>
                  <label
                    htmlFor="frictionPoint"
                    className="block text-sm font-semibold text-[#1A2838] mb-1.5"
                  >
                    Quel est votre point de friction ou la tâche qui vous fait perdre le plus de temps ?{" "}
                    <span className="text-[#ED7410]">*</span>
                  </label>
                  <textarea
                    id="frictionPoint"
                    name="frictionPoint"
                    required
                    rows={4}
                    value={formData.frictionPoint}
                    onChange={handleChange}
                    placeholder="Exemple : Nous passons 3 heures par semaine à ressaisir manuellement les devis dans notre logiciel de facturation et à relancer les impayés un par un sur WhatsApp..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3A5C8A] focus:border-transparent text-sm transition-all resize-y"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Bouton de soumission */}
                <div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full py-4 text-base font-semibold shadow-md gap-2 tracking-wide disabled:opacity-60 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <span>Transmission en cours...</span>
                    ) : (
                      <>
                        <span>Réserver mon diagnostic gratuit (30 min)</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Mentions de réassurance obligatoires */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1A2838]/70 gap-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#3A5C8A]" />
                    <span>Réponse sous 24h ouvrées</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#3A5C8A]" />
                    <span>Données 100 % confidentielles (conformité CNDP & RGPD)</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

