import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer id="footer" className="bg-[#131B24] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Colonne 1 & 2 : Marque & Vision */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block p-1 mb-4 focus:outline-none focus:ring-2 focus:ring-[#8FB0DC] rounded"
              aria-label="Nomira - Accueil"
            >
              {/* Logo horizontal version fond sombre officiel (hauteur 46px dans la plage 40-56px demandée) */}
              <div className="relative h-11 w-48 sm:w-56">
                <Image
                  src="/brand/lockup-horizontal-fond-sombre.svg"
                  alt="Nomira — Regagnez vos ressources"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              Nomira conçoit et déploie des micro-solutions logicielles ciblées en 4 jours ouvrés.
              Éliminez vos goulets d'étranglement administratifs et regagnez votre temps et vos marges.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-[#8FB0DC]">
              <MapPin className="w-4 h-4 text-[#ED7410]" />
              <span>Casablanca · Paris</span>
            </div>
          </div>

          {/* Colonne 3 : Navigation rapide */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#constat" className="text-gray-400 hover:text-white transition-colors">
                  Le Constat
                </a>
              </li>
              <li>
                <a href="#parcours" className="text-gray-400 hover:text-white transition-colors">
                  Le Parcours en 5 étapes
                </a>
              </li>
              <li>
                <a href="#avantage" className="text-gray-400 hover:text-white transition-colors">
                  L'Avantage Nomira
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors">
                  Micro-Solutions
                </a>
              </li>
              <li>
                <a href="#subventions" className="text-gray-400 hover:text-white transition-colors">
                  Aides & Subventions
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Coordonnées Directes */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact direct
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+212661574247"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#8FB0DC]" />
                  <span>+212 6 61 57 42 47</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212661574247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#ED7410]" />
                  <span>WhatsApp direct</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-500" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@nomira.ma"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#8FB0DC]" />
                  <span>contact@nomira.ma</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFA23C] hover:underline"
                >
                  <span>Demander un diagnostic (30 min)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 5 : QR Code WhatsApp */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Flash WhatsApp
            </h4>
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-md">
              <div className="relative w-24 h-24">
                <Image
                  src="/qr-whatsapp.svg"
                  alt="QR Code WhatsApp Nomira +212 6 61 57 42 47"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-2 leading-tight">
              Scannez pour échanger directement sur WhatsApp.
            </p>
          </div>
        </div>

        {/* Liens légaux & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Nomira. Tous droits réservés. « Regagnez vos ressources ».</p>

          <div className="flex items-center space-x-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

