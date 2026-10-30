import { CheckCircle2, ShieldCheck, Zap, Users, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    duration: "30 min",
    title: "Diagnostic chiffré",
    description:
      "Échange direct pour isoler votre tâche la plus chronophage. Nous quantifions le coût de la friction et validons l'opportunité.",
    statusText: "100% Gratuit",
    isCore: false,
  },
  {
    step: "02",
    duration: "Sous 24h",
    title: "Cadrage à prix fixe",
    description:
      "Un devis forfaitaire ferme accompagné d'un périmètre technique précis sur 1 page. Aucun dépassement possible, aucun coût masqué.",
    statusText: "Prix verrouillé",
    isCore: false,
  },
  {
    step: "03",
    duration: "4 jours",
    title: "Déploiement agile",
    description:
      "Conception et programmation sur-mesure. Nous nous branchons directement sur vos flux actuels (Excel, mails, WhatsApp, ERP).",
    statusText: "Délai contractuel",
    isCore: true,
  },
  {
    step: "04",
    duration: "45 minutes",
    title: "Mise en service & Prise en main",
    description:
      "Déploiement effectif auprès des équipes. Une session de 45 minutes suffit : vos collaborateurs sont immédiatement opérationnels.",
    statusText: "Autonomie totale",
    isCore: false,
  },
  {
    step: "05",
    duration: "Garantie",
    title: "Suivi & Garantie intégrale",
    description:
      "Vérification des gains en conditions réelles, ajustements ergonomiques et garantie de fonctionnement complet incluse.",
    statusText: "Livrable garanti",
    isCore: false,
  },
];

export default function Parcours() {
  return (
    <section id="parcours" className="w-full py-16 lg:py-24 bg-[#F7FAFE]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#ED7410] font-semibold block mb-2">
            Méthode &amp; Calendrier
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">
            Du problème résolu en 5 étapes limpides
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#405C82] leading-relaxed">
            Pas de tunnel de réunion de six mois. Une démarche courte, pragmatique et focalisée sur le résultat économique concret pour votre entreprise.
          </p>
        </div>

        {/* Grille des 5 étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className={`bg-white p-5 rounded-xl border flex flex-col justify-between relative transition-all duration-200 ${
                item.isCore
                  ? "border-2 border-[#ED7410] shadow-sm"
                  : "border-[#E2E9F3] hover:border-[#FFA23C]"
              }`}
            >
              {item.isCore && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#ED7410] text-white text-[10px] font-semibold uppercase tracking-wider">
                  Cœur Nomira
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-[#ED7410]">
                    {item.step}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[11px] rounded font-semibold ${
                      item.isCore
                        ? "bg-[#ED7410] text-white"
                        : "bg-[#FFF6EA] text-[#ED7410]"
                    }`}
                  >
                    {item.duration}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#1A2838] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#405C82] leading-snug">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E9F3] flex items-center justify-between text-[12px] font-medium text-[#1D9E75]">
                <span className="flex items-center gap-1">
                  {item.isCore ? (
                    <Zap className="w-3.5 h-3.5 text-[#ED7410]" />
                  ) : item.step === "04" ? (
                    <Users className="w-3.5 h-3.5 text-[#3A5C8A]" />
                  ) : (
                    <ShieldCheck className="w-3.5 h-3.5" />
                  )}
                  <span className={item.isCore ? "text-[#ED7410]" : item.step === "04" ? "text-[#3A5C8A]" : "text-[#1D9E75]"}>
                    {item.statusText}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA d'action */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#ED7410] hover:bg-[#d86507] active:bg-[#c55e0b] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Lancer un diagnostic sans frais</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-[#6784B0] mt-2">
            30 minutes en visio ou par téléphone · Aucune carte bancaire requise
          </p>
        </div>
      </div>
    </section>
  );
}
