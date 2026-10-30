import { ArrowRight, ChevronDown, CheckCircle2, TrendingDown, Timer, ShieldCheck, Info, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-white">
      {/* Halos ambiants discrets (blobs) */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 pointer-events-none -z-10 blur-3xl opacity-40"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 230, 198, 0.45), rgba(235, 238, 242, 0.2), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-12 right-12 w-64 h-64 rounded-full pointer-events-none -z-10 blur-2xl opacity-40"
        style={{ backgroundColor: "rgba(226, 233, 243, 0.6)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge supérieur */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F3F6FA] border border-[#E2E9F3] text-[#1A2838]">
            <span className="w-2 h-2 rounded-full bg-[#ED7410] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Micro-solutions logicielles TPE / PME · Casablanca &amp; Paris
            </span>
          </div>
        </div>

        {/* Titre & Sous-titre */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A2838] leading-tight sm:leading-none">
            Un problème visé.<br />
            <span className="text-[#ED7410] relative inline-block mt-1">
              Un coût en moins.
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-[#FFA23C]"
                preserveAspectRatio="none"
                viewBox="0 0 100 8"
                aria-hidden="true"
              >
                <path
                  d="M0,5 Q50,0 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#405C82] max-w-2xl mx-auto leading-relaxed">
            Nomira conçoit et déploie des micro-solutions logicielles ultra-ciblées en quelques jours.
            Éliminez vos ressaisies, fiabilisez vos encaissements et regagnez votre temps précieux, sans abonnement lourd ni usine à gaz.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#ED7410] hover:bg-[#d86507] active:bg-[#c55e0b] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA23C]"
            >
              <span>Demander le diagnostic gratuit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#constat"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3F6FA] text-[#1A2838] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-[#C3D0E2] hover:border-[#93A9C7] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A5C8A]"
            >
              <span>Découvrir le constat</span>
              <ChevronDown className="w-4 h-4 text-[#3A5C8A]" />
            </a>
          </div>
        </div>

        {/* 3 Cartes Métriques Clés */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Carte 1 */}
          <div className="group bg-white/90 backdrop-blur-md rounded-xl p-6 border border-[#E2E9F3] hover:border-[#FFA23C] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6784B0]">
                Rentabilité directe
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#FFF6EA] flex items-center justify-center text-[#ED7410]">
                <TrendingDown className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">−32</span>
              <span className="text-2xl sm:text-3xl font-bold text-[#ED7410]">%</span>
            </div>
            <p className="text-xs sm:text-sm text-[#405C82] leading-snug">
              de coûts de traitement opérationnels constatés sur le périmètre automatisé.
            </p>
            <div className="mt-4 pt-3 border-t border-[#E2E9F3]/80 text-[11px] text-[#6784B0] flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Donnée moyenne observée (à valider selon votre cas)</span>
            </div>
          </div>

          {/* Carte 2 : 4 jours (avec badge engagement ferme) */}
          <div className="group bg-white/90 backdrop-blur-md rounded-xl p-6 border border-[#E2E9F3] hover:border-[#FFA23C] hover:shadow-md transition-all duration-300 relative">
            <div className="absolute -top-2.5 right-6 px-2.5 py-0.5 rounded-full bg-[#1A2838] text-white text-[11px] font-semibold tracking-wide">
              Engagement ferme
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6784B0]">
                Délai garanti
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#E2E9F3] flex items-center justify-center text-[#1A2838]">
                <Timer className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-3xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">4</span>
              <span className="text-xl sm:text-2xl font-semibold text-[#ED7410]">jours</span>
            </div>
            <p className="text-xs sm:text-sm text-[#405C82] leading-snug">
              de déploiement effectif entre le cadrage validé et la mise en production.
            </p>
            <div className="mt-4 pt-3 border-t border-[#E2E9F3]/80 text-[11px] text-[#6784B0] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 shrink-0 text-[#ED7410]" />
              <span>Planning verrouillé dès signature</span>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="group bg-white/90 backdrop-blur-md rounded-xl p-6 border border-[#E2E9F3] hover:border-[#FFA23C] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6784B0]">
                Aides &amp; Financements
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#E4F4EC] flex items-center justify-center text-[#0F6E56]">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-lg sm:text-xl text-[#405C82] font-normal mr-1">Jusqu'à</span>
              <span className="text-3xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">70</span>
              <span className="text-2xl sm:text-3xl font-bold text-[#ED7410]">%</span>
            </div>
            <p className="text-xs sm:text-sm text-[#405C82] leading-snug">
              de subventions et prises en charge mobilisables pour votre digitalisation.
            </p>
            <div className="mt-4 pt-3 border-t border-[#E2E9F3]/80 text-[11px] text-[#6784B0] flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Maroc PME &amp; Dispositifs France Num</span>
            </div>
          </div>
        </div>

        {/* Ruban de Réassurance */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[#405C82] text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1D9E75]" />
            <span>Diagnostic de 30 min offert et sans engagement</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C3D0E2]" />
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1D9E75]" />
            <span>Devis forfaitaire au centime près</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C3D0E2]" />
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1D9E75]" />
            <span>Zéro dépendance logicielle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
