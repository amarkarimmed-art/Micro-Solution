import { Network, LockKeyhole, Code2, Coins } from "lucide-react";

const PILLARS = [
  {
    icon: Network,
    title: "Maîtrise des flux métiers",
    description:
      "Nous ne parlons pas en acronymes technologiques abstraits. Nous analysons vos factures, vos agendas, vos fichiers Excel et résolvons le nœud opérationnel qui freine votre journée.",
  },
  {
    icon: LockKeyhole,
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
    icon: Coins,
    title: "Subventions mobilisées",
    description:
      "Nous intégrons la recherche d'aides à la transition numérique dès le diagnostic pour que votre investissement soit rentabilisé en quelques semaines à peine.",
  },
];

export default function Pourquoi() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface border-t border-border-subtle" id="pourquoi">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-steel-blue text-xs uppercase tracking-wider font-semibold mb-3">
            Pourquoi Choisir Nomira
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-text-primary tracking-tight font-bold mb-3">
            L&apos;efficacité technique sans les lourdeurs d&apos;agence
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Notre raison d&apos;être : vous faire regagner vos ressources en éliminant les tâches qui gaspillent votre énergie et vos marges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="reveal-item revealed p-6 rounded-xl bg-surface-canvas border border-border-subtle shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center mb-4 text-steel-blue">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
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
