import type { ActivationData } from '../../types/dashboard';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import { formatPercentage } from '../../utils/formatters';

interface ActivationCardProps {
  activation: ActivationData;
}

/**
 * ActivationCard — Company activation progress with step-based visualization.
 * Height-aligned with CustomerSummaryCard via h-full + flex.
 */
const ActivationCard = ({ activation }: ActivationCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Header */}
      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
        Company activation
      </h3>
      <p className="text-[2.25rem] font-extrabold text-text-primary leading-none mb-5">
        {formatPercentage(activation.overallPercentage)}
      </p>

      {/* Steps — flex-1 to fill remaining height */}
      <div className="space-y-3.5 flex-1 flex flex-col justify-center">
        {activation.steps.map((step) => (
          <div key={step.label} className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: step.color }}
            />
            <span className="text-[11px] text-text-secondary w-[5.5rem] flex-shrink-0">
              {step.label}
            </span>
            <div className="flex-1 min-w-0">
              <ProgressBar
                percentage={step.percentage}
                color={step.color}
                height="sm"
              />
            </div>
            <span className="text-[11px] font-bold text-text-primary w-9 text-right tabular-nums">
              {formatPercentage(step.percentage)}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ActivationCard;
