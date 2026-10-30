import { Brain, Receipt, Code2, Award } from "lucide-react";

const PILLARS = [
  {
    icon: Brain,
    title: "Maîtrise des flux métiers",
    description:
      "Nous ne parlons pas en acronymes technologiques abstraits. Nous analysons vos factures, vos agendas, vos fichiers Excel et résolvons le nœud opérationnel qui freine votre journée.",
  },
  {
    icon: Receipt,
    title: "Forfait fixe et sans aléa",
    description:
      "Pas de tarif journalier qui s'étire. Chaque intervention Nomira fait l'objet d'un montant arrêté à l'avance. Ce qui a été convenu est exactement ce qui est facturé.",
  },
  {
    icon: Code2,
    title: "Code pérenne et réversible",
    description:
      "Votre micro-solution repose sur des briques modernes et interopérables. Vous n'êtes pas captif d'une plateforme propriétaire : vous restez maître de votre destin informatique.",
  },
  {
    icon: Award,
    title: "Subventions mobilisées",
    description:
      "Nous intégrons la recherche d'aides à la transition numérique dès le diagnostic pour que votre investissement soit rentabilisé en quelques semaines à peine.",
  },
];

export default function Pourquoi() {
  return (
    <section id="pourquoi" className="w-full py-16 lg:py-24 bg-[#F7FAFE]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#ED7410] font-semibold block mb-2">
            Pourquoi Choisir Nomira
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">
            L'efficacité technique sans les lourdeurs d'agence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#405C82] leading-relaxed">
            Notre raison d'être : vous faire regagner vos ressources en éliminant les tâches qui gaspillent votre énergie et vos marges.
          </p>
        </div>

        {/* Grille des 4 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-[#E2E9F3] flex flex-col justify-between hover:border-[#FFA23C] transition-all duration-200 hover:shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FFF6EA] text-[#ED7410] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A2838] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#405C82] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
