"use client";

import { useState, useEffect, useRef } from "react";
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
  const [activeId, setActiveId] = useState<string | null>(null);
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = (href: string) => {
    const targetId = href.replace(/^#/, "");
    setActiveId(targetId);
    isClickingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace(/^#/, ""));

    const updateActiveSection = () => {
      if (isClickingRef.current) return;

      const zoneTop = 64;
      const zoneBottom = window.innerHeight * 0.4;
      let bestId: string | null = null;
      let maxOverlap = 0;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const overlapTop = Math.max(zoneTop, rect.top);
        const overlapBottom = Math.min(zoneBottom, rect.bottom);
        const overlap = Math.max(0, overlapBottom - overlapTop);
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          bestId = id;
        }
      }

      if (maxOverlap > 0) {
        setActiveId(bestId);
      } else {
        // En remontant jusqu'au hero (au-dessus du premier seuil), aucun lien n'est actif
        const firstSection = document.getElementById(sectionIds[0]);
        if (firstSection && window.scrollY < firstSection.offsetTop - 100) {
          setActiveId(null);
        }
      }
    };

    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        rootMargin: "-64px 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScrollHero = () => {
      if (isClickingRef.current) return;
      const firstSection = document.getElementById(sectionIds[0]);
      if (firstSection && window.scrollY < firstSection.offsetTop - 100) {
        setActiveId((prev) => (prev !== null ? null : prev));
      }
    };
    window.addEventListener("scroll", handleScrollHero, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollHero);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
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
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`text-sm text-[#1A2838] hover:text-[#ED7410] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5C8A] rounded px-1 py-0.5 nav-link ${
                      isActive ? "nav-link-active font-semibold" : "font-medium"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Téléphone direct */}
            <a
              href="tel:+212661574247"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#1A2838] hover:text-[#ED7410] px-2.5 py-1.5 rounded transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5C8A]"
              title="Appeler Nomira"
            >
              <Phone className="w-3.5 h-3.5 text-[#3A5C8A]" />
              <span>+212 6 61 57 42 47</span>
            </a>

            {/* Bouton CTA En-tête */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#ED7410] hover:bg-[#d86507] active:bg-[#c55e0b] text-white font-semibold text-xs whitespace-nowrap px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA23C]"
            >
              Diagnostic gratuit
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
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleNavClick(link.href);
                    setMobileMenuOpen(false);
                  }}
                  aria-current={isActive ? "location" : undefined}
                  className={`w-fit text-base text-[#1A2838] hover:text-[#ED7410] hover:bg-[#8FB0DC]/10 px-3 py-2 rounded-md transition-colors nav-link nav-link-mobile ${
                    isActive ? "nav-link-active font-semibold" : "font-medium"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
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
