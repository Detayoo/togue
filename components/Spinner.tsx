export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={`h-[80vh] flex justify-center items-center ${className}`}>
      <div className="spinner" />
    </div>
  );
};
