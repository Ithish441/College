import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { SafeImage } from './SafeImage';

interface ManagementSectionProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

interface ManagementCard {
  id: 'chairman' | 'correspondent' | 'principal';
  role: string;
  title: string;
  subtitle: string;
  defaultImage: string;
}

const MANAGEMENT_CARDS: ManagementCard[] = [
  {
    id: 'chairman',
    role: 'Chairman & Patron',
    title: 'Archdiocese Educational Society',
    subtitle: 'Guiding institutional vision, ethical stewardship, and holistic student welfare since 1997.',
    defaultImage: '/assets/aistudio/bishop_c0176988.webp',
  },
  {
    id: 'correspondent',
    role: 'Secretary & Correspondent',
    title: 'College Governing Management',
    subtitle: 'Overseeing King Koti campus infrastructure, industry partnerships, and scholarship endowments.',
    defaultImage: '/assets/aistudio/Correspondent_aa21262b.webp',
  },
  {
    id: 'principal',
    role: 'Principal',
    title: 'Autonomous Academic Administration',
    subtitle: 'Leading Osmania University autonomous curriculum, faculty mentorship, and placement outcomes.',
    defaultImage: '/assets/aistudio/Principal-img_3cbc630c.webp',
  },
];

export function ManagementSection({ onNavigate }: ManagementSectionProps) {
  return (
    <section
      aria-label="College Management"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16"
    >
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#1E2A24] tracking-tight text-balance">
              Management &amp; Governance
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5F3F] hover:text-[#14402B] transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Institutional Heritage</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MANAGEMENT_CARDS.map((card) => (
            <motion.article
              key={card.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 overflow-hidden flex flex-col hover:shadow-md will-change-transform"
            >
              <div>
                <div className="aspect-square w-full overflow-hidden bg-[#FFFFFF] relative">
                  <SafeImage
                    src={card.defaultImage}
                    alt={`${card.role} — ${card.title}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#1F5F3F]">{card.role}</p>
                  <h3 className="font-display font-bold text-xl text-[#1E2A24] mt-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#5E6E66] mt-2 leading-relaxed">{card.subtitle}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
