import { CheckCircle2, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Diagnostic chiffré (30 min)",
    desc: "Échange direct pour isoler votre tâche la plus chronophage. Nous quantifions le coût de la friction et validons l'opportunité d'une micro-solution.",
    duration: "Gratuit & sans engagement",
  },
  {
    step: "02",
    title: "Cadrage à prix fixe",
    desc: "Un devis forfaitaire ferme accompagné d'un périmètre technique précis sur 1 page. Aucun dépassement possible, aucun coût masqué.",
    duration: "Validation sous 24h",
  },
  {
    step: "03",
    title: "Déploiement en 4 jours",
    desc: "Conception et programmation sur-mesure de votre micro-solution. Nous nous branchons sur vos flux actuels (Excel, mails, WhatsApp, ERP).",
    duration: "4 jours ouvrés",
  },
  {
    step: "04",
    title: "Mise en service & Formation",
    desc: "Déploiement effectif auprès de vos équipes. Une session de prise en main de 45 minutes suffit : vos collaborateurs sont immédiatement autonomes.",
    duration: "Immédiat",
  },
  {
    step: "05",
    title: "Suivi & Garantie intégrale",
    desc: "Vérification des gains en conditions réelles, ajustements ergonomiques et garantie de fonctionnement complet incluse.",
    duration: "Garantie incluse",
  },
];

export default function Parcours() {
  return (
    <section id="parcours" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3A5C8A] mb-3">
            Méthode & Calendrier
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-4">
            Du problème résolu en 5 étapes limpides
          </p>
          <p className="text-base sm:text-lg text-[#1A2838]/80 leading-relaxed">
            Pas de tunnel de réunion de six mois. Une démarche courte, pragmatique et focalisée sur
            le résultat économique concret pour votre entreprise.
          </p>
        </div>

        {/* Grille des 5 étapes */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-white rounded-xl p-5 sm:p-6 border border-[#405C82]/15 shadow-sm hover:border-[#3A5C8A]/40 transition-all flex flex-col justify-between group"
            >
              {/* En-tête de carte avec numéro et pastille */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#3A5C8A] tracking-tight">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#8FB0DC]/20 text-[#1A2838]">
                    {item.duration}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1A2838] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1A2838]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#ED7410]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Livrable garanti</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Intermédiaire */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="btn-primary px-8 py-3.5 text-base font-semibold shadow-md inline-flex items-center gap-2"
          >
            Lancer un diagnostic sans frais
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-3 text-xs text-[#405C82]">
            30 minutes en visio ou par téléphone · Aucune carte bancaire requise
          </p>
        </div>
      </div>
    </section>
  );
}

