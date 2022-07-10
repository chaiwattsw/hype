const TopItemsSkeleton = ({ rounded }: { rounded?: boolean }) => {
  return (
    <div className="w-full flex gap-6 flex-col">
      {[...Array(10)].map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse flex items-center gap-6 flex-row w-full md:w-1/2"
        >
          <div
            className={`bg-slate-200 h-16 w-16 ${
              rounded ? "rounded-full" : ""
            }`}
          ></div>
          <div className="flex flex-col gap-4">
            <div className="w-48">
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
            <div className="w-24">
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopItemsSkeleton;
