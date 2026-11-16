import { MessageCircle, Phone } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export function FloatingContactDock() {
  const whatsappUrl = `https://wa.me/${COLLEGE_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello St. Joseph's Admissions Desk, I would like information about 2026-27 UG/PG admissions."
  )}`;
  const telUrl = `tel:${COLLEGE_INFO.admissionsHelpline.replace(/\s+/g, '')}`;

  return (
    <div
      aria-label="Quick Contact Actions"
      className="fixed bottom-4 right-4 z-30 flex items-center gap-2.5"
    >
      <a
        href={telUrl}
        aria-label="Call Admissions Helpline"
        className="inline-flex items-center gap-2 rounded-full bg-[#14402B] hover:bg-[#1F5F3F] text-white text-xs font-semibold px-3.5 py-2.5 shadow-lg border border-[#4CAF7A]/30 transition-transform duration-150 hover:-translate-y-0.5 min-h-[44px]"
      >
        <Phone className="w-4 h-4 text-[#D4A533] shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">Call Desk</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Admissions"
        className="inline-flex items-center gap-2 rounded-full bg-[#4CAF7A] hover:bg-[#3f9d6b] text-[#14402B] text-xs font-bold px-3.5 py-2.5 shadow-lg transition-transform duration-150 hover:-translate-y-0.5 min-h-[44px]"
      >
        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>
    </div>
  );
}
