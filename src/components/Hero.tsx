import { ArrowRight, ChevronDown, CheckCircle2, Zap, Clock, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white"
    >
      {/* Accent subtil de fond (halo discret sans dégradé complexe) */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl -z-10"
        style={{ backgroundColor: "rgba(143, 176, 220, 0.25)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge de positionnement */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-accent text-xs sm:text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ED7410] animate-pulse" />
            <span className="font-semibold text-[#1A2838]">
              Micro-solutions logicielles TPE / PME · Casablanca & Paris
            </span>
          </div>

          {/* H1 Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A2838] leading-[1.15] mb-6">
            Un problème visé. <br className="hidden sm:inline" />
            <span className="text-[#3A5C8A]">Un coût en moins.</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl text-[#1A2838]/80 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Nomira conçoit et déploie des micro-solutions logicielles ultra-ciblées en quelques jours.
            Éliminez vos ressaisies, fiabilisez vos encaissements et regagnez votre temps précieux, sans abonnement lourd ni usine à gaz.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="btn-primary w-full sm:w-auto px-7 py-3.5 text-base font-semibold shadow-md gap-2"
            >
              Demander le diagnostic gratuit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#constat"
              className="btn-secondary w-full sm:w-auto px-6 py-3.5 text-base font-semibold gap-2"
            >
              Découvrir le constat
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Grille 3 Chiffres Clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Chiffre 1 */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#405C82]/15 shadow-sm hover:border-[#3A5C8A]/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3A5C8A]">
                Rentabilité directe
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#FFA23C]/15 flex items-center justify-center text-[#ED7410]">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-2">
              −32 %
            </div>
            <p className="text-sm text-[#1A2838]/75 leading-snug">
              de coûts de traitement opérationnels constatés sur le périmètre automatisé.
            </p>
            <div className="mt-3 text-[11px] font-medium text-[#405C82]">
              * Donnée moyenne observée (à valider selon votre cas)
            </div>
          </div>

          {/* Chiffre 2 */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#405C82]/15 shadow-sm hover:border-[#3A5C8A]/40 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-1 bg-[#ED7410]" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3A5C8A]">
                Délai garanti
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#8FB0DC]/25 flex items-center justify-center text-[#3A5C8A]">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-2">
              4 jours
            </div>
            <p className="text-sm text-[#1A2838]/75 leading-snug">
              de déploiement effectif entre le cadrage validé et la mise en production.
            </p>
            <div className="mt-3 text-[11px] font-medium text-[#3A5C8A]">
              Engagement calendrier ferme
            </div>
          </div>

          {/* Chiffre 3 */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#405C82]/15 shadow-sm hover:border-[#3A5C8A]/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3A5C8A]">
                Aides & Financements
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#8FB0DC]/25 flex items-center justify-center text-[#3A5C8A]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-2">
              Jusqu'à 70 %
            </div>
            <p className="text-sm text-[#1A2838]/75 leading-snug">
              de subventions et prises en charge mobilisables pour votre digitalisation.
            </p>
            <div className="mt-3 text-[11px] font-medium text-[#405C82]">
              * Selon statut juridique et région (Casablanca / Paris)
            </div>
          </div>
        </div>

        {/* Réassurance supplémentaire */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#1A2838]/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ED7410]" />
            <span>Diagnostic de 30 min offert et sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ED7410]" />
            <span>Devis forfaitaire au centime près</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#ED7410]" />
            <span>Zéro dépendance logicielle</span>
          </div>
        </div>
      </div>
    </section>
  );
}

