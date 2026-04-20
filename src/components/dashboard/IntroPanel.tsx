/**
 * IntroPanel — Hero text intro block at the top-left of the dashboard.
 * Soft lavender background with bold heading — sized to balance with right cards.
 */
const IntroPanel = () => {
  return (
    <div className="h-full flex flex-col justify-center py-2">
      <h1 className="text-[1.6rem] sm:text-[1.75rem] lg:text-[1.85rem] font-extrabold text-text-primary leading-[1.25] tracking-tight">
        We automatically generate
        <br className="hidden sm:block" />
        {' '}reports for each of your
        <br className="hidden sm:block" />
        {' '}customers
      </h1>
    </div>
  );
};

export default IntroPanel;
