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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 lg:py-24 bg-white border-t border-[#E2E9F3]">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#ED7410] font-semibold block mb-2">
            Foire Aux Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">
            Tout ce que vous devez savoir avant de démarrer
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#405C82]">
            Des réponses claires et sans détour sur notre façon d'intervenir.
          </p>
        </div>

        {/* Accordéon FAQ */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;

            return (
              <div
                key={index}
                className="border border-[#E2E9F3] rounded-xl bg-[#F3F6FA]/50 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#1A2838] hover:text-[#ED7410] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5C8A] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6784B0] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#ED7410]" : ""
                    }`}
                  />
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={`px-5 pb-5 pt-1 text-xs sm:text-sm text-[#405C82] leading-relaxed ${
                    isOpen ? "block animate-in fade-in duration-150" : "hidden"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact direct sous la FAQ */}
        <div className="mt-8 text-center text-xs sm:text-sm text-[#405C82]">
          Une interrogation spécifique sur votre environnement ?{" "}
          <a
            href="https://wa.me/212661574247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ED7410] hover:underline font-semibold inline-flex items-center gap-1"
          >
            <span>Posez-nous la question sur WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>{" "}
          ou par téléphone au{" "}
          <a
            href="tel:+212661574247"
            className="text-[#1A2838] hover:text-[#ED7410] font-semibold"
          >
            +212 6 61 57 42 47
          </a>
          .
        </div>
      </div>
    </section>
  );
}
