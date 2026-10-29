"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Constat", href: "#constat" },
  { label: "Parcours", href: "#parcours" },
  { label: "Avantage", href: "#avantage" },
  { label: "Solutions", href: "#solutions" },
  { label: "Subventions", href: "#subventions" },
  { label: "Pourquoi", href: "#pourquoi" },
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
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white/95 backdrop-blur-md ${
        scrolled ? "shadow-sm border-b border-[#3A5C8A]/15 py-2.5" : "py-3.5 border-b border-[#3A5C8A]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo avec marge de protection obligatoire égale à la hauteur d'icône */}
          <Link
            href="/"
            className="flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-[#3A5C8A] rounded-lg"
            aria-label="Nomira - Accueil"
          >
            {/* Logo horizontal officiel (hauteur 46px dans la plage 40-56px demandée) */}
            <div className="relative h-11 w-44 sm:w-52">
              <Image
                src="/brand/lockup-horizontal.svg"
                alt="Nomira - Regagnez vos ressources"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1A2838] hover:text-[#3A5C8A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3A5C8A] rounded px-1.5 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Contact En-tête */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+212661574247"
              className="hidden xl:flex items-center text-xs font-semibold text-[#3A5C8A] hover:text-[#1A2838] px-2.5 py-1.5 rounded transition-colors"
              title="Appeler Nomira"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              +212 6 61 57 42 47
            </a>
            <a
              href="#contact"
              className="btn-primary text-xs sm:text-sm px-4 py-2 shadow-sm font-semibold tracking-wide"
            >
              Diagnostic 0 €
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href="#contact"
              className="btn-primary text-xs px-3 py-1.5 font-semibold"
            >
              Diagnostic 0 €
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1A2838] hover:bg-[#8FB0DC]/15 focus:outline-none focus:ring-2 focus:ring-[#3A5C8A]"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#3A5C8A]/10 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-2" aria-label="Menu mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1A2838] hover:text-[#3A5C8A] hover:bg-[#8FB0DC]/10 px-3 py-2.5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="tel:+212661574247"
                className="flex items-center text-sm font-semibold text-[#3A5C8A] px-3 py-2 rounded-md bg-[#8FB0DC]/10"
              >
                <Phone className="w-4 h-4 mr-2" />
                +212 6 61 57 42 47 (Casablanca · Paris)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

