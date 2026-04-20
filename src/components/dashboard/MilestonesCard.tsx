import type { MilestoneEvent } from '../../types/dashboard';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import { Sparkles } from 'lucide-react';

interface MilestonesCardProps {
  milestone: MilestoneEvent;
}

/**
 * MilestonesCard — Milestone notification on yellow background.
 * Balanced visual weight with the right-side Enrichment + CRM stack.
 */
const MilestonesCard = ({ milestone }: MilestonesCardProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Section header — consistent sizing with other section headings */}
      <h2 className="text-[1.1rem] font-extrabold text-accent-purple mb-1">
        Celebrate milestones
      </h2>
      <p className="text-xs text-gray-500 mb-3 leading-relaxed max-w-[300px]">
        Instant alerts and weekly digests to keep your team aligned and celebrate wins
      </p>

      {/* Notification card */}
      <Card className="flex-1 !p-4" hoverable={false}>
        {/* Notification header row */}
        <div className="flex items-center gap-2 mb-2">
          <Avatar name="June" size="sm" className="bg-accent-purple text-white !w-6 !h-6 !text-[10px]" />
          <span className="text-xs font-bold text-text-primary">June</span>
          <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded font-medium">app</span>
          <span className="text-[10px] text-gray-400 ml-auto">{milestone.contact.timestamp}</span>
        </div>

        {/* Event badge */}
        <div className="mb-2">
          <Badge variant="purple" className="px-2 py-0.5 text-[10px]" icon={<Sparkles size={10} />}>
            {milestone.type}
          </Badge>
        </div>

        {/* Contact info */}
        <p className="text-xs text-gray-500 mb-3">
          <span className="font-semibold text-text-primary">{milestone.contact.name}</span>
          {' '}
          <span className="text-accent-blue hover:underline cursor-pointer">{milestone.contact.email}</span>
        </p>

        {/* Details grid — consistent gap */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-gray-100 pt-3">
          {milestone.details.map((detail) => (
            <div key={detail.label} className="min-w-0">
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed">{detail.label}</p>
              {detail.isLink ? (
                <p className="text-[11px] text-accent-blue cursor-pointer hover:underline truncate font-medium">
                  {detail.value}
                </p>
              ) : (
                <p className="text-[11px] text-text-primary font-semibold truncate">
                  {detail.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MilestonesCard;
