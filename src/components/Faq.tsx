"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Combien coûte une micro-solution Nomira ?",
    a: "Chaque projet est cadré sous la forme d'un forfait fixe et définitif, sans facturation horaire imprévisible. Le tarif exact est arrêté lors du diagnostic de cadrage (selon la complexité du connecteur ou du script à développer). Grâce aux subventions de digitalisation mobilisables (jusqu'à 70 % selon votre profil), le reste à charge réel pour votre entreprise est généralement amorti dès le deuxième mois d'exploitation.",
  },
  {
    q: "Comment pouvez-vous déployer en seulement 4 jours ?",
    a: "Contrairement aux agences traditionnelles qui tentent de refondre tout votre système, nous nous focalisons sur un seul point de friction précis (ex. l'émission des factures ou les rappels de rendez-vous). Nous utilisons des briques logicielles éprouvées et des connecteurs standards, ce qui nous permet de livrer un outil fonctionnel, testé et prêt à l'emploi en 4 jours ouvrés.",
  },
  {
    q: "Faut-il des compétences techniques particulières dans mon équipe ?",
    a: "Absolument aucune. La micro-solution est conçue pour s'adapter à vos habitudes (fichiers Excel familiers, emails, interface web intuitive ou alertes WhatsApp). Une session de prise en main de 45 minutes suffit amplement pour que vos équipes soient totalement autonomes dès le premier jour.",
  },
  {
    q: "Quel suivi et quelle garantie sont prévus après la mise en service ?",
    a: "Toutes nos micro-solutions bénéficient d'une garantie intégrale de bon fonctionnement. Si un ajustement s'avère nécessaire dans les semaines suivant la livraison, nous intervenons immédiatement. De plus, une assistance réactive reste disponible pour accompagner l'évolution de vos besoins.",
  },
  {
    q: "Comment fonctionnent concrètement les aides et subventions ?",
    a: "Lors de notre premier échange de 30 minutes, nous examinons vos critères d'éligibilité aux dispositifs d'aide à la transition numérique (au Maroc comme en France). Si votre dossier est éligible, nous prenons en charge la formalisation des pièces techniques et des devis requis pour maximiser vos chances d'obtention.",
  },
  {
    q: "Que faire si mon métier ou mon logiciel actuel n'apparaît pas sur le site ?",
    a: "Les exemples présentés ne constituent qu'un aperçu de nos réalisations. Dès lors que votre activité manipule des données (devis, plannings, factures, dossiers clients ou stocks), nous sommes capables de concevoir une passerelle sur-mesure pour automatiser vos tâches. Décrivez-nous simplement votre processus dans le formulaire ci-dessous.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#8FB0DC]/10 border-t border-b border-[#3A5C8A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3A5C8A] mb-3">
            Foire Aux Questions
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-4">
            Tout ce que vous devez savoir avant de démarrer
          </p>
          <p className="text-base sm:text-lg text-[#1A2838]/80 leading-relaxed">
            Des réponses claires et sans détour sur notre façon d'intervenir.
          </p>
        </div>

        {/* Accordéon Accessible */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#405C82]/15 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#3A5C8A] focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1A2838]">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#8FB0DC]/20 flex items-center justify-center text-[#3A5C8A] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#3A5C8A] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#1A2838]/80 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Vous avez une autre question ? */}
        <div className="mt-12 text-center text-sm text-[#1A2838]/75">
          Une interrogation spécifique sur votre environnement ?{" "}
          <a
            href="https://wa.me/212661574247"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#3A5C8A] hover:underline"
          >
            Posez-nous la question sur WhatsApp
          </a>{" "}
          ou par téléphone au{" "}
          <a href="tel:+212661574247" className="font-semibold text-[#3A5C8A] hover:underline">
            +212 6 61 57 42 47
          </a>
          .
        </div>
      </div>
    </section>
  );
}

