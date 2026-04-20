/**
 * IntroPanel — Hero heading. Sized down to balance within the 2-col lavender block.
 */
interface IntroPanelProps {
  reportsThisWeek: number;
  activeWorkflows: number;
}

const IntroPanel = ({ reportsThisWeek, activeWorkflows }: IntroPanelProps) => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h1 className="text-2xl font-extrabold text-text-primary leading-[1.25] tracking-tight">
        We automatically generate reports for each of your customers
        </h1>
        <p className="mt-3 text-sm text-text-secondary max-w-[36ch] leading-relaxed">
          Keep your CS and GTM teams aligned with concise summaries, enrichment signals, and milestone alerts.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <div className="rounded-xl bg-white/70 border border-white/60 px-3 py-2.5">
          <p className="text-[11px] uppercase tracking-wider text-gray-400">Reports this week</p>
          <p className="text-lg font-bold text-text-primary leading-tight mt-1">{reportsThisWeek}</p>
        </div>
        <div className="rounded-xl bg-white/70 border border-white/60 px-3 py-2.5">
          <p className="text-[11px] uppercase tracking-wider text-gray-400">Active workflows</p>
          <p className="text-lg font-bold text-text-primary leading-tight mt-1">{activeWorkflows}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroPanel;
