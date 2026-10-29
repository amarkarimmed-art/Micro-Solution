"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("nomira_cookie_consent");
    if (!consent) {
      // Affichage après un bref délai pour ne pas gêner le premier rendu
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("nomira_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("nomira_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Consentement aux traceurs"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-[#1A2838] text-white p-5 rounded-2xl shadow-2xl border border-[#3A5C8A]/40 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#FFA23C]/20 text-[#ED7410] shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-1">
            Respect de votre vie privée
          </h4>
          <p className="text-xs text-gray-300 leading-relaxed mb-3">
            Nous utilisons uniquement des cookies de mesure d'audience anonymes pour améliorer votre expérience, en conformité avec la loi marocaine 09-08 (CNDP) et le RGPD.{" "}
            <Link
              href="/confidentialite"
              className="text-[#8FB0DC] underline hover:text-white"
            >
              En savoir plus
            </Link>
            .
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAccept}
              className="btn-primary text-xs px-3.5 py-1.5 font-semibold"
            >
              Accepter
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded border border-gray-600 hover:border-gray-400 transition-colors"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

