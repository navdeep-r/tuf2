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
      <h2 className="text-xl font-bold text-accent-purple mb-1">
        Celebrate milestones
      </h2>
      <p className="text-sm text-text-secondary mb-5 leading-relaxed">
        Instant alerts and weekly digests to keep your team aligned
        <br />
        and celebrate wins
      </p>

      {/* Notification card */}
      <Card className="flex-1" hoverable={false}>
        {/* Notification header row */}
        <div className="flex items-center gap-2 mb-3">
          <Avatar name="June" size="sm" />
          <span className="text-xs font-semibold text-text-primary">June</span>
          <span className="text-[10px] text-text-muted">app</span>
          <span className="text-[10px] text-text-muted">{milestone.contact.timestamp}</span>
        </div>

        {/* Event badge */}
        <div className="mb-3">
          <Badge variant="purple" icon={<Sparkles size={12} />}>
            {milestone.type}
          </Badge>
        </div>

        {/* Contact info */}
        <p className="text-xs text-text-secondary mb-3">
          <span className="font-medium text-text-primary">{milestone.contact.name}</span>
          {' '}
          <span className="text-accent-blue">{milestone.contact.email}</span>
        </p>

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {milestone.details.map((detail) => (
            <div key={detail.label} className="min-w-0">
              <p className="text-[10px] text-text-muted font-medium">{detail.label}</p>
              {detail.isLink ? (
                <p className="text-[11px] text-accent-blue cursor-pointer hover:underline truncate">
                  {detail.value}
                </p>
              ) : (
                <p className="text-[11px] text-text-primary font-medium truncate">
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
