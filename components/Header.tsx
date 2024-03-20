import { Logo } from ".";

export const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white min-h-[10vh] m:border-b m:px-10">
      <Logo />
      <div className="flex items-center gap-x-6 m:hidden">
        <p>Join waitlist</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};
