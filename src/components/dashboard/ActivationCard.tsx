import type { ActivationData } from '../../types/dashboard';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import { formatPercentage } from '../../utils/formatters';

interface ActivationCardProps {
  activation: ActivationData;
}

/**
 * ActivationCard — Company activation progress with step-based visualization.
 * Shows overall percentage and individual step progress bars.
 */
const ActivationCard = ({ activation }: ActivationCardProps) => {
  return (
    <Card className="h-full">
      {/* Header */}
      <h3 className="text-sm font-semibold text-text-secondary mb-1">
        Company activation
      </h3>
      <p className="text-3xl font-bold text-text-primary mb-5">
        {formatPercentage(activation.overallPercentage)}
      </p>

      {/* Steps */}
      <div className="space-y-3">
        {activation.steps.map((step) => (
          <div key={step.label} className="flex items-center gap-3">
            {/* Step icon dot */}
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: step.color }}
            />
            {/* Label */}
            <span className="text-xs text-text-secondary w-24 flex-shrink-0">
              {step.label}
            </span>
            {/* Progress bar */}
            <div className="flex-1">
              <ProgressBar
                percentage={step.percentage}
                color={step.color}
                height="sm"
              />
            </div>
            {/* Percentage value */}
            <span className="text-xs font-semibold text-text-primary w-10 text-right">
              {formatPercentage(step.percentage)}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ActivationCard;
