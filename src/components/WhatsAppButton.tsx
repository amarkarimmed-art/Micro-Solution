"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212661574247?text=Bonjour%20Nomira,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20micro-solutions."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center bg-[#ED7410] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#d86507] transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FFA23C]/50"
      aria-label="Contacter Nomira sur WhatsApp au +212 6 61 57 42 47"
    >
      <MessageCircle className="w-6 h-6 text-white shrink-0" />
      <span className="hidden sm:inline-block ml-2 text-xs font-semibold tracking-wide">
        Échanger sur WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
      </span>
    </a>
  );
}

