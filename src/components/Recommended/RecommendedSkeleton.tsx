const RecommendedSkeleton = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-16 mt-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white [text-shadow:-3px_3px_0_#000] mb-2">
          Recommendations
        </h1>
        <div className="font-medium text-lg">
          <span className="mr-1 text-white">
            Because you listened to <div className="animate-pulse w-32"></div>
          </span>
        </div>
      </div>
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
  );
};

export default RecommendedSkeleton;
