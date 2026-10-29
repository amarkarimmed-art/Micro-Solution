import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Constat from "@/components/Constat";
import Parcours from "@/components/Parcours";
import Avantage from "@/components/Avantage";
import Solutions from "@/components/Solutions";
import Subventions from "@/components/Subventions";
import Pourquoi from "@/components/Pourquoi";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Fixe */}
      <Header />

      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Le Constat */}
        <Constat />

        {/* 4. Le Parcours */}
        <Parcours />

        {/* 5. L'Avantage Comparatif */}
        <Avantage />

        {/* 6. Micro-Solutions Sectorielles */}
        <Solutions />

        {/* 7. Subventions & Financements */}
        <Subventions />

        {/* 8. Différenciateurs / Pourquoi Nomira */}
        <Pourquoi />

        {/* 9. FAQ Accordéon */}
        <Faq />

        {/* 10. Formulaire de Diagnostic */}
        <ContactForm />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Éléments Flottants & Conformité */}
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
