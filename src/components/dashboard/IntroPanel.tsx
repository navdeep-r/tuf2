/**
 * IntroPanel — Hero text intro block at the top-left of the dashboard.
 * Soft lavender background with large heading and subtitle.
 */
const IntroPanel = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="text-[1.75rem] md:text-[2rem] font-bold text-text-primary leading-tight tracking-tight">
        We automatically generate
        <br />
        reports for each of your
        <br />
        customers
      </h1>
    </div>
  );
};

export default IntroPanel;
