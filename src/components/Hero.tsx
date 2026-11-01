"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, CheckCircle2, TrendingDown, Clock, Landmark, Info } from "lucide-react";

export default function Hero() {
  const [showIntro, setShowIntro] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const removeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimerRef = useRef<NodeJS.Timeout | null>(null);

  const skip = () => {
    if (removeTimerRef.current) clearTimeout(removeTimerRef.current);
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    setIsFading(false);
    setIsPlaying(false);
    setShowIntro(false);
  };

  const handleVideoEnd = () => {
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    setIsFading(true);
    setIsPlaying(false);
    removeTimerRef.current = setTimeout(() => {
      setShowIntro(false);
    }, 300);
  };

  useEffect(() => {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        sessionStorage.setItem("nomira_hero_intro_seen", "true");
        return;
      }
    } catch (e) {}

    try {
      if (sessionStorage.getItem("nomira_hero_intro_seen")) {
        return;
      }
      sessionStorage.setItem("nomira_hero_intro_seen", "true");
    } catch (e) {}

    setShowIntro(true);
    setIsPlaying(true);

    safetyTimerRef.current = setTimeout(() => {
      skip();
    }, 5000);

    return () => {
      if (removeTimerRef.current) clearTimeout(removeTimerRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-surface py-10 md:py-20">
      {/* Fond décoratif architectural diffus */}
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-soft-ice/30 rounded-full blur-[110px]" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-accent-orange/10 rounded-full blur-[90px]" />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge supérieur */}
        <div className="hero-stagger-1 opacity-0 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-surface-elevated shadow-sm mb-4 max-w-[95vw]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange" />
          </span>
          <span className="text-[9px] min-[400px]:text-[10px] sm:text-xs uppercase tracking-wider text-steel-blue font-semibold">
            Micro-solutions <span className="hidden sm:inline">logicielles </span>TPE / PME · Casablanca &amp; Paris
          </span>
        </div>

        {/* Zone de taille fixe aspect-[16/9], max-w-[640px], centrée */}
        <div className="relative w-full max-w-[640px] mx-auto aspect-[16/9] flex items-center justify-center mb-6">
          {/* Titre et paragraphe : masqués pendant l'intro (opacity 0), puis visibles */}
          <div
            className={`w-full flex flex-col items-center justify-center text-center transition-opacity duration-500 ${
              isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {/* Titre H1 Imposant */}
            <div className="hero-stagger-2 opacity-0 max-w-4xl mx-auto mb-4">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl text-text-primary tracking-tight font-bold">
                <span>Un problème visé.</span>
                <br />
                <span className="relative inline-block mt-1">
                  <span>Un coût en moins.</span>
                  {/* Soulignement vectoriel animé en scaleX(0 -> 1) */}
                  <svg
                    aria-hidden="true"
                    className="svg-underline-animated absolute -bottom-2 md:-bottom-3 left-0 w-full h-[9px] md:h-[13px] text-accent-orange overflow-visible pointer-events-none"
                    fill="none"
                    viewBox="0 0 250 14"
                  >
                    <path
                      d="M3 10.5C52 3.5 156 1.5 247 11.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3.2"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Sous-titre synthétique */}
            <div className="hero-stagger-3 opacity-0 max-w-2xl mx-auto mb-6">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Nomira conçoit et déploie des micro-solutions logicielles ultra-ciblées en quelques jours. Éliminez vos ressaisies, fiabilisez vos encaissements et regagnez votre temps précieux, sans abonnement lourd ni usine à gaz.
              </p>
            </div>
          </div>

          {/* Intro en absolute par-dessus cette zone */}
          {showIntro && (
            <div
              className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
                isFading ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <button
                type="button"
                onClick={skip}
                className="absolute top-2 right-2 z-20 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-text-primary text-xs font-medium shadow-sm border border-border-subtle transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange"
                aria-label="Passer l'animation"
              >
                Passer l'animation
              </button>

              <video
                autoPlay
                muted
                playsInline
                preload="auto"
                poster="/images/nomira-intro-poster.jpg"
                width={1280}
                height={720}
                aria-hidden="true"
                onEnded={handleVideoEnd}
                onError={skip}
                className="w-full h-full object-contain"
              >
                <source src="/videos/nomira-intro.webm" type="video/webm" />
                <source src="/videos/nomira-intro.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </div>

        {/* Boutons CTA */}
        <div className="hero-stagger-4 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-7 rounded-xl bg-accent-orange text-white text-base font-semibold shadow-md hover:bg-[#d86507] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-orange/40 group"
          >
            <span>Demander le diagnostic gratuit</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#constat"
            className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-xl bg-surface-canvas border border-border-subtle text-text-primary text-base font-medium hover:bg-surface-elevated transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-steel-blue/30"
          >
            <span>Découvrir le constat</span>
            <ChevronDown className="w-4 h-4 ml-2 text-text-secondary" />
          </a>
        </div>

        {/* Grille des 3 Cartes KPI Clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mb-10">
          {/* KPI 1 */}
          <div className="hero-stagger-card-1 opacity-0 p-6 rounded-2xl bg-surface-canvas border border-border-subtle shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-text-muted font-bold">
                  Rentabilité directe
                </span>
                <TrendingDown className="w-5 h-5 text-accent-orange" />
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mb-2">
                −32%
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                de coûts de traitement opérationnels constatés sur le périmètre automatisé.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border-subtle flex items-center gap-1.5 text-xs text-text-muted">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Donnée moyenne observée (à valider selon votre cas)</span>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="hero-stagger-card-2 opacity-0 p-6 rounded-2xl bg-surface-canvas border border-border-subtle shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-text-muted font-bold">
                  Engagement ferme · Délai garanti
                </span>
                <Clock className="w-5 h-5 text-steel-blue" />
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mb-2">
                4 jours
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                de déploiement effectif entre le cadrage validé et la mise en production.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border-subtle flex items-center gap-1.5 text-xs text-text-muted">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Planning verrouillé dès signature</span>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="hero-stagger-card-3 opacity-0 p-6 rounded-2xl bg-surface-canvas border border-border-subtle shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-text-muted font-bold">
                  Aides & Financements
                </span>
                <Landland className="w-5 h-5 text-accent-orange" />
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mb-2">
                Jusqu'à 70%
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                de subventions et prises en charge mobilisables pour votre digitalisation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border-subtle flex items-center gap-1.5 text-xs text-text-muted">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Maroc PME & Dispositifs France Num</span>
            </div>
          </div>
        </div>

        {/* Ruban de réassurance sobre */}
        <div className="hero-stagger-ribbon opacity-0 inline-flex flex-wrap items-center justify-center gap-y-2 gap-x-6 px-6 py-3 rounded-xl bg-surface-elevated/70 border border-border-subtle text-xs sm:text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" />
            <span>Diagnostic de 30 min offert et sans engagement</span>
          </div>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border-subtle" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" />
            <span>Devis forfaitaire au centime près</span>
          </div>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border-subtle" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" />
            <span>Zéro dépendance logicielle</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Landland({ className }: { className?: string }) {
  return <Landmark className={className} />;
}
