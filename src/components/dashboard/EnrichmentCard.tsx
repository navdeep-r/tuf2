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

const iconMap: Record<string, ReactNode> = {
  globe: <Globe size={14} className="text-gray-400" />,
  'map-pin': <MapPin size={14} className="text-gray-400" />,
  users: <Users size={14} className="text-gray-400" />,
  twitter: <AtSign size={14} className="text-gray-400" />,
  'dollar-sign': <DollarSign size={14} className="text-gray-400" />,
  'check-circle': <CheckCircle size={14} className="text-accent-green" />,
};

/**
 * EnrichmentCard — grid-cols-2 gap-6 for balanced two-column fields.
 */
const EnrichmentCard = ({ enrichment }: EnrichmentCardProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-1">
        <h2 className="text-[1.1rem] font-extrabold text-accent-purple">
          Automatic enrichment
        </h2>
        <div className="w-10 h-10 bg-accent-purple rounded-xl flex items-center justify-center ml-4 flex-shrink-0">
          <Sparkles size={16} className="text-white" />
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        Automatically enrich your customers profiles and their users powered by GPT
      </p>

      <div className="bg-card-white rounded-2xl shadow-md border border-gray-100 p-5 flex-1">
        <div className="mb-4">
          <Badge variant="teal" className="px-2 py-0.5 text-[10px]" icon={<Sparkles size={10} />}>
            Enriched with AI
          </Badge>
        </div>

        {/* Strict 2-col grid with gap-3 */}
        <div className="grid grid-cols-2 gap-3">
          {enrichment.fields.map((field) => (
            <div key={field.label} className="flex items-center gap-2 group">
              <span className="flex-shrink-0 opacity-60">
                {iconMap[field.icon] || <Globe size={14} className="text-gray-400" />}
              </span>
              <span className="text-[11px] text-gray-400 w-[4.5rem] flex-shrink-0">
                {field.label}
              </span>
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
