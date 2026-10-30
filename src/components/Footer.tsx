"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="footer" className="w-full bg-[#131B24] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Colonne 1 : Marque & Vision (Logo aligné à gauche, hauteur fixe, largeur auto) */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB0DC] rounded"
              aria-label="Nomira - Accueil"
            >
              <img
                src="/brand/lockup-horizontal-fond-sombre.svg"
                alt="Nomira — Regagnez vos ressources"
                width={220}
                height={44}
                className="h-10 sm:h-11 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-sm font-medium text-[#FFA23C]">
              Regagnez vos ressources.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Conception chirurgicale de micro-outils d'optimisation opérationnelle et financière pour TPE et PME.
            </p>
          </div>

          {/* Colonne 2 : Bureaux & Présence (Adresses à valider) */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Bureaux &amp; Présence
            </h3>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase text-[#FFA23C]">Casablanca, Maroc</p>
              <p className="text-xs sm:text-sm text-gray-300">Bd d'Anfa, Racine, Casablanca</p>
              <a
                href="tel:+212661574247"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                +212 6 61 57 42 47
              </a>
            </div>
            <div className="pt-2 space-y-1">
              <p className="text-xs font-semibold uppercase text-[#FFA23C]">Paris, France</p>
              <p className="text-xs sm:text-sm text-gray-300">Rue du Faubourg Saint-Honoré, 75008 Paris</p>
            </div>
          </div>

          {/* Colonne 3 : Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#constat" className="hover:text-white transition-colors">
                  Constat Métier
                </a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-white transition-colors">
                  Parcours Déploiement
                </a>
              </li>
              <li>
                <a href="#avantage" className="hover:text-white transition-colors">
                  L'Avantage Nomira
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Micro-Solutions
                </a>
              </li>
              <li>
                <a href="#financement" className="hover:text-white transition-colors">
                  Aides &amp; Financement
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Foire Aux Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Échange Direct */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Échange Direct
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Un expert dédié examine vos goulets d'étranglement administratifs sous 24h ouvrées.
            </p>
            <div>
              <a
                href="https://wa.me/212661574247?text=Bonjour%20Nomira,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20micro-solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75]"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne inférieure de copyright et liens légaux */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {currentYear} Nomira. Tous droits réservés.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              Mentions Légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/cgu"
              className="hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              Conditions Générales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
