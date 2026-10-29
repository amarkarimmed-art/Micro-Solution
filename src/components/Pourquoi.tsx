import { Target, Lock, Code2, Award } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Maîtrise des flux métiers",
    description:
      "Nous ne parlons pas en acronymes technologiques abstraits. Nous analysons vos factures, vos agendas, vos fichiers Excel et résolvons le nœud opérationnel qui freine votre journée.",
  },
  {
    icon: Lock,
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
    <section id="pourquoi" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3A5C8A] mb-3">
            Pourquoi Choisir Nomira
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-4">
            L'efficacité technique sans les lourdeurs d'agence
          </p>
          <p className="text-base sm:text-lg text-[#1A2838]/80 leading-relaxed">
            Notre raison d'être : vous faire regagner vos ressources en éliminant les tâches
            qui gaspillent votre énergie et vos marges.
          </p>
        </div>

        {/* Grille des 4 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[#405C82]/15 shadow-sm hover:border-[#3A5C8A]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#FFA23C]/20 text-[#ED7410] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A2838] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1A2838]/75 leading-relaxed">
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

