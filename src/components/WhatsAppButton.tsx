"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <aside className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/212661574247?text=Bonjour%20Nomira,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20micro-solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#ED7410] hover:bg-[#d86507] text-white px-4 py-2.5 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 border border-white/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFA23C]/50"
        aria-label="Échanger sur WhatsApp avec Nomira (+212 6 61 57 42 47)"
      >
        <MessageCircle className="w-5 h-5 text-white shrink-0" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          Échanger sur WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1D9E75]" />
        </span>
      </a>
    </aside>
  );
}
