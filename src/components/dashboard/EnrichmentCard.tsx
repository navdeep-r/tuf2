import type { EnrichmentData } from '../../types/dashboard';
import Badge from '../ui/Badge';
import {
  Globe,
  MapPin,
  Users,
  Twitter,
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
  twitter: <Twitter size={14} className="text-text-muted" />,
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
      <h2 className="text-xl font-bold text-accent-purple mb-1">
        Automatic enrichment
      </h2>
      <p className="text-sm text-text-secondary mb-5 leading-relaxed">
        Automatically enrich your customers profiles and their users powered
        <br />
        by GPT
      </p>

      {/* Enrichment card body */}
      <div className="bg-card-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-5 flex-1">
        {/* AI badge */}
        <div className="mb-4">
          <Badge variant="teal" icon={<Sparkles size={12} />}>
            Enriched with AI
          </Badge>
        </div>

        {/* Fields grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {enrichment.fields.map((field) => (
            <div key={field.label} className="flex items-center gap-2">
              {/* Icon */}
              <span className="flex-shrink-0">
                {iconMap[field.icon] || <Globe size={14} className="text-text-muted" />}
              </span>
              {/* Label */}
              <span className="text-xs text-text-muted w-16 flex-shrink-0">
                {field.label}
              </span>
              {/* Value */}
              <span
                className={`text-xs font-semibold truncate ${
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
