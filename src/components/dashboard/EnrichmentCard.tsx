import type { EnrichmentData } from '../../types/dashboard';
import Badge from '../ui/Badge';
import {
  Globe,
  MapPin,
  Users,
  AtSign,
  DollarSign,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface EnrichmentCardProps {
  enrichment: EnrichmentData;
}

/** Map icon string names to Lucide components */
const iconMap: Record<string, ReactNode> = {
  globe: <Globe size={14} className="text-text-muted" />,
  'map-pin': <MapPin size={14} className="text-text-muted" />,
  users: <Users size={14} className="text-text-muted" />,
  twitter: <AtSign size={14} className="text-text-muted" />,
  'dollar-sign': <DollarSign size={14} className="text-text-muted" />,
  'check-circle': <CheckCircle size={14} className="text-accent-green" />,
};

/**
 * EnrichmentCard — AI-enriched company data fields on coral background.
 * Shows a badge and a 2-column grid of enriched fields with icons.
 */
const EnrichmentCard = ({ enrichment }: EnrichmentCardProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Section header */}
      <div className="flex items-start justify-between mb-1">
        <h2 className="text-xl font-extrabold text-accent-purple">
          Automatic enrichment
        </h2>
        {/* Decorative icon block */}
        <div className="w-12 h-12 bg-accent-purple rounded-2xl flex items-center justify-center ml-4 flex-shrink-0">
          <Sparkles size={20} className="text-white" />
        </div>
      </div>
      <p className="text-[13px] text-text-secondary mb-5 leading-relaxed max-w-[380px]">
        Automatically enrich your customers profiles and their users powered by GPT
      </p>

      {/* Enrichment card body */}
      <div className="bg-card-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-5 flex-1 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
        {/* AI badge */}
        <div className="mb-4">
          <Badge variant="teal" icon={<Sparkles size={11} />}>
            Enriched with AI
          </Badge>
        </div>

        {/* Fields grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3.5">
          {enrichment.fields.map((field) => (
            <div key={field.label} className="flex items-center gap-2.5 group">
              {/* Icon */}
              <span className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                {iconMap[field.icon] || <Globe size={14} className="text-text-muted" />}
              </span>
              {/* Label */}
              <span className="text-[11px] text-text-muted w-[4.5rem] flex-shrink-0">
                {field.label}
              </span>
              {/* Value */}
              <span
                className={`text-[12px] font-semibold truncate ${
                  field.isHighlight ? 'text-accent-green' : 'text-text-primary'
                }`}
              >
                {field.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrichmentCard;
