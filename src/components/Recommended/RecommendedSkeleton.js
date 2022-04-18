import React from "react";

const RecommendedSkeleton = () => {
  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-5 gap-4 mt-8">
      {[...Array(20)].map((_, idx) => (
        <div key={idx} className="animate-pulse">
          <div className="bg-slate-200 h-[211px] w-[211px] mb-3"></div>
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
