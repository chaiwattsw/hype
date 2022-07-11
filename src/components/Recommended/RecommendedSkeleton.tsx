const RecommendedSkeleton = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white [text-shadow:-3px_3px_0_#000] mb-4">
          Recommendations
        </h1>
        <div className="animate-pulse h-4 bg-slate-200 rounded w-1/2"></div>
      </div>
      <div className="flex flex-row flex-wrap gap-16">
        {[...Array(20)].map((_, idx) => (
          <div key={idx} className="animate-pulse basis-48">
            <div className="bg-slate-200 h-48 w-48 mb-3"></div>
            <div className="flex flex-col gap-y-3 w-32">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="w-20">
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSkeleton;
