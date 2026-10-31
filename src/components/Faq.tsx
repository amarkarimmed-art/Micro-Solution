"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Combien coûte une micro-solution Nomira ?",
    a: "Chaque projet est cadré sous la forme d'un forfait fixe et définitif, sans facturation horaire imprévisible. Le tarif exact est arrêté lors du diagnostic de cadrage (selon la complexité du connecteur ou du script à développer). Grâce aux subventions de digitalisation mobilisables (jusqu'à 70 % selon votre profil), le reste à charge réel pour votre entreprise est généralement amorti dès le deuxième mois d'exploitation.",
  },
  {
    q: "Comment pouvez-vous déployer en seulement 4 jours ?",
    a: "Nous ne réinventons pas la roue et nous refusons les usines à gaz. Nous utilisons des briques logicielles robustes et pré-assemblées, que nous configurons sur-mesure pour votre processus précis. En isolant une seule friction à la fois plutôt qu'en refondant l'intégralité de vos systèmes, notre équipe livre un code opérationnel et testé en 4 jours ouvrés montre en main.",
  },
  {
    q: "Faut-il des compétences techniques particulières dans mon équipe ?",
    a: "Absolument aucune. La force de nos micro-solutions est de s'adapter à vos usages actuels (vos emails, vos tableurs habituels, vos groupes WhatsApp ou votre logiciel de devis existant). La prise en main prend en moyenne 45 minutes et nos interfaces sont conçues pour être aussi intuitives qu'une messagerie instantanée.",
  },
  {
    q: "Quel suivi et quelle garantie sont prévus après la mise en service ?",
    a: "Chaque déploiement inclut une garantie intégrale de bon fonctionnement avec support technique direct. Si un flux se désynchronise ou nécessite un micro-ajustement ergonomique, nous intervenons immédiatement. De plus, vous êtes propriétaire de votre solution, sans engagement de maintenance obligatoire si vous souhaitez la gérer en interne.",
  },
  {
    q: "Comment fonctionnent concrètement les aides et subventions ?",
    a: "Lors de notre premier appel de diagnostic de 30 minutes, nous vérifions votre éligibilité auprès des programmes en vigueur (Maroc PME ou chèques numériques régionaux en France). Si vous êtes éligible, nous montons l'intégralité du dossier technique pour vous afin de sécuriser votre financement avant le démarrage.",
  },
  {
    q: "Que faire si mon métier ou mon logiciel actuel n'apparaît pas sur le site ?",
    a: "Les cas présentés sont des exemples représentatifs. Nous intervenons sur une grande variété d'architectures (logiciels métiers propriétaires, ERP spécialisés, plateformes cloud). Nos connecteurs d'automatisation peuvent s'interfacer avec pratiquement n'importe quel flux numérique.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-surface-canvas border-t border-border-subtle" id="faq">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-steel-blue text-xs uppercase tracking-wider font-semibold mb-3">
            Foire Aux Questions
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-text-primary tracking-tight font-bold mb-3">
            Tout ce que vous devez savoir avant de démarrer
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Des réponses claires et sans détour sur notre façon d&apos;intervenir.
          </p>
        </div>

        {/* Accordéon interactif avec transition CSS grid */}
        <div className="space-y-3" id="faq-accordion">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;

            return (
              <div
                key={index}
                className={`faq-item reveal-item revealed rounded-xl border border-border-subtle bg-surface-subtle overflow-hidden ${
                  isOpen ? "active" : ""
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(index)}
                  className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue transition-colors"
                >
                  <span className="font-heading text-[17px] font-bold text-text-primary">
                    {item.q}
                  </span>
                  <ChevronDown className="faq-icon text-steel-blue shrink-0 w-5 h-5 transition-transform duration-200" />
                </button>
                <div id={contentId} role="region" className="faq-answer-grid">
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 text-text-secondary text-sm sm:text-base border-t border-border-subtle/40 leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact direct sous FAQ verbatim */}
        <div className="mt-8 text-center text-text-secondary text-sm sm:text-base">
          Une interrogation spécifique sur votre environnement ?{" "}
          <a
            className="text-accent-orange font-semibold hover:underline inline-flex items-center gap-1 ml-1"
            href="https://wa.me/212661574247"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Posez-nous la question sur WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>{" "}
          ou par téléphone au{" "}
          <a className="text-primary font-semibold hover:underline ml-1" href="tel:+212661574247">
            +212 6 61 57 42 47
          </a>
          .
        </div>
      </div>
    </section>
  );
}
