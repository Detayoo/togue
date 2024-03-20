export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`h-[80vh] w-full flex flex-col justify-center items-center ${className}`}
    >
      <div className="spinner" />
      <p className="mt-1">Just one second..</p>
    </div>
  );
};
