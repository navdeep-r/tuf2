import type { MilestoneEvent } from '../../types/dashboard';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import { Sparkles } from 'lucide-react';

interface MilestonesCardProps {
  milestone: MilestoneEvent;
}

/**
 * MilestonesCard — Milestone feed / notification card on yellow background.
 * Shows a highlighted event with contact details and metadata grid.
 */
const MilestonesCard = ({ milestone }: MilestonesCardProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Section header */}
      <h2 className="text-xl font-extrabold text-accent-purple mb-1">
        Celebrate milestones
      </h2>
      <p className="text-[13px] text-text-secondary mb-5 leading-relaxed max-w-[320px]">
        Instant alerts and weekly digests to keep your team aligned
        and celebrate wins
      </p>

      {/* Notification card */}
      <Card className="flex-1 !p-5" hoverable={false}>
        {/* Notification header row */}
        <div className="flex items-center gap-2 mb-3">
          <Avatar name="June" size="sm" className="bg-accent-purple text-white" />
          <span className="text-xs font-bold text-text-primary">June</span>
          <span className="text-[10px] text-text-muted bg-gray-100 px-1.5 py-0.5 rounded">app</span>
          <span className="text-[10px] text-text-muted ml-auto">{milestone.contact.timestamp}</span>
        </div>

        {/* Event badge */}
        <div className="mb-3">
          <Badge variant="purple" icon={<Sparkles size={11} />}>
            {milestone.type}
          </Badge>
        </div>

        {/* Contact info */}
        <p className="text-xs text-text-secondary mb-4">
          <span className="font-semibold text-text-primary">{milestone.contact.name}</span>
          {' '}
          <span className="text-accent-blue hover:underline cursor-pointer">{milestone.contact.email}</span>
        </p>

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-gray-100 pt-3">
          {milestone.details.map((detail) => (
            <div key={detail.label} className="min-w-0">
              <p className="text-[10px] text-text-muted font-medium leading-relaxed">{detail.label}</p>
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
