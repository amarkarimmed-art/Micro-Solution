"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Constat", href: "#constat" },
  { label: "Parcours", href: "#parcours" },
  { label: "Avantage", href: "#avantage" },
  { label: "Solutions", href: "#solutions" },
  { label: "Financement", href: "#financement" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        scrolled
          ? "shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-[#3A5C8A]/15 py-2.5"
          : "border-b border-[#3A5C8A]/10 py-3.5"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Le header utilise flex avec justify-between.
            Le bloc logo est le premier enfant (à GAUCHE).
            Le bloc navigation + actions est le second enfant (à DROITE). */}
        <div className="flex items-center justify-between gap-4">
          
          {/* PREMIER ENFANT : Bloc Logo (toujours calé à GAUCHE, hauteur fixe 44px, largeur auto) */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5C8A] rounded-lg"
            aria-label="Nomira - Accueil"
          >
            <img
              src="/brand/lockup-horizontal.svg"
              alt="Nomira — Regagnez vos ressources"
              width={220}
              height={44}
              className="h-10 sm:h-11 w-auto object-contain"
              fetchPriority="high"
            />
          </Link>

          {/* SECOND ENFANT : Bloc Navigation + Actions (toujours calé à DROITE) */}
          <div className="flex items-center gap-4 lg:gap-6">
            
            {/* Navigation Desktop */}
            <nav className="hidden xl:flex items-center gap-6" aria-label="Navigation principale">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#1A2838] hover:text-[#ED7410] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5C8A] rounded px-1 py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Téléphone direct */}
            <a
              href="tel:+212661574247"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#1A2838] hover:text-[#ED7410] px-2.5 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5C8A]"
              title="Appeler Nomira"
            >
              <Phone className="w-3.5 h-3.5 text-[#3A5C8A]" />
              <span>+212 6 61 57 42 47</span>
            </a>

            {/* Bouton CTA En-tête */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#ED7410] hover:bg-[#d86507] active:bg-[#c55e0b] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA23C]"
            >
              Diagnostic 0 €
            </a>

            {/* Bouton Menu Mobile (xl:hidden) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#1A2838] hover:text-[#ED7410] hover:bg-[#8FB0DC]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5C8A] transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tiroir Mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden border-t border-[#3A5C8A]/10 bg-white px-4 pt-4 pb-6 shadow-xl animate-in fade-in duration-150"
        >
          <nav className="flex flex-col space-y-2.5" aria-label="Menu mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1A2838] hover:text-[#ED7410] hover:bg-[#8FB0DC]/10 px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:+212661574247"
                className="flex items-center text-sm font-semibold text-[#1A2838] px-3 py-2 rounded-md bg-[#8FB0DC]/10"
              >
                <Phone className="w-4 h-4 mr-2 text-[#3A5C8A]" />
                +212 6 61 57 42 47 (Casablanca · Paris)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
