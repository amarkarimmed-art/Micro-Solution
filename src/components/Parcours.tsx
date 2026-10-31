"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";

const STEPS = [
  {
    step: "01",
    duration: "30 min",
    badge: "100% Gratuit",
    title: "Diagnostic chiffré",
    description:
      "Échange direct pour isoler votre tâche la plus chronophage. Nous quantifions le coût de la friction et validons l'opportunité.",
    isCore: false,
  },
  {
    step: "02",
    duration: "Sous 24h",
    badge: "Prix verrouillé",
    title: "Cadrage à prix fixe",
    description:
      "Un devis forfaitaire ferme accompagné d'un périmètre technique précis sur 1 page. Aucun dépassement possible, aucun coût masqué.",
    isCore: false,
  },
  {
    step: "03",
    duration: "4 jours",
    badge: "Délai contractuel",
    title: "Déploiement agile",
    description:
      "Conception et programmation sur-mesure. Nous nous branchons directement sur vos flux actuels (Excel, mails, WhatsApp, ERP).",
    isCore: true,
  },
  {
    step: "04",
    duration: "45 minutes",
    badge: "Autonomie totale",
    title: "Mise en service & Prise en main",
    description:
      "Déploiement effectif auprès des équipes. Une session de 45 minutes suffit : vos collaborateurs sont immédiatement opérationnels.",
    isCore: false,
  },
  {
    step: "05",
    duration: "Garantie",
    badge: "Livrable garanti",
    title: "Suivi & Garantie intégrale",
    description:
      "Vérification des gains en conditions réelles, ajustements ergonomiques et garantie de fonctionnement complet incluse.",
    isCore: false,
  },
];

export default function Parcours() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
        const total = rect.height;
        const current = windowHeight * 0.7 - rect.top;
        const progress = Math.min(Math.max(current / total, 0), 1);
        setProgressHeight(progress * total);
      } else if (rect.top > windowHeight * 0.7) {
        setProgressHeight(0);
      } else if (rect.bottom < 0) {
        setProgressHeight(rect.height);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="parcours" className="w-full py-16 md:py-24 bg-surface border-t border-border-subtle relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-steel-blue text-xs uppercase tracking-wider font-semibold mb-3">
            Méthode &amp; Calendrier
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-text-primary tracking-tight font-bold mb-3">
            Du problème résolu en 5 étapes limpides
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Pas de tunnel de réunion de six mois. Une démarche courte, pragmatique et focalisée sur le résultat économique concret pour votre entreprise.
          </p>
        </div>

        {/* Timeline avec jauge dynamique de progression */}
        <div ref={containerRef} className="relative pl-6 md:pl-10 my-8">
          {/* Rail de fond */}
          <div className="absolute left-2.5 md:left-4 top-3 bottom-3 w-1 bg-border-subtle rounded-full -translate-x-1/2" />
          {/* Ligne de progression dynamique orange animée */}
          <div
            className="absolute left-2.5 md:left-4 top-3 w-1 bg-accent-orange rounded-full -translate-x-1/2 origin-top transition-all duration-75 ease-out"
            style={{ height: `${progressHeight}px` }}
          />

          <div className="space-y-6">
            {STEPS.map((step) =>
              step.isCore ? (
                /* Étape 03 : Cœur Nomira */
                <div
                  key={step.step}
                  className="reveal-item revealed relative flex flex-col md:flex-row md:items-start justify-between gap-4 p-6 sm:p-7 rounded-xl bg-surface-canvas border-2 border-accent-orange shadow-md overflow-hidden"
                >
                  <div className="absolute -left-[30px] md:-left-[46px] top-6 w-5 h-5 rounded-full bg-accent-orange border-4 border-surface-canvas" />
                  <div className="absolute top-0 right-0 bg-accent-orange text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-bl-lg">
                    Cœur Nomira
                  </div>
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-[24px] font-bold text-accent-orange">{step.step}</span>
                      <span className="px-3 py-0.5 rounded-full bg-accent-orange/15 text-accent-orange text-xs font-bold">
                        {step.duration}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary text-[11px] font-bold uppercase tracking-wider">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ) : (
                /* Étapes Standard */
                <div
                  key={step.step}
                  className="reveal-item revealed relative flex flex-col md:flex-row md:items-start justify-between gap-4 p-6 rounded-xl bg-surface-canvas border border-border-subtle shadow-sm"
                >
                  <div className="absolute -left-[30px] md:-left-[46px] top-6 w-5 h-5 rounded-full bg-surface-canvas border-4 border-steel-blue" />
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-[22px] font-bold text-steel-blue">{step.step}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-elevated text-text-secondary text-xs font-semibold">
                        {step.duration}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-steel-blue text-[11px] font-bold uppercase tracking-wider">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Encart CTA Parcours */}
        <div className="reveal-item revealed mt-12 p-6 sm:p-8 rounded-xl bg-surface-elevated border border-border-subtle text-center flex flex-col items-center">
          <h4 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-2">
            Lancer un diagnostic sans frais
          </h4>
          <p className="text-sm sm:text-base text-text-secondary max-w-lg mb-6">
            30 minutes en visio ou par téléphone · Aucune carte bancaire requise
          </p>
          <a
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg bg-accent-orange text-white font-medium text-sm shadow-md hover:bg-accent-orange-hover transition-all active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange"
            href="#contact"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Réserver mon créneau
          </a>
        </div>
      </div>
    </section>
  );
}
