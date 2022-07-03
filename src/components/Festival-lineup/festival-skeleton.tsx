import React from "react";

const FestivalSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse flex justify-center items-center flex-col w-full">
      <div className="bg-slate-200 px-4 py-1 rounded-2xl w-20 h-8 mb-4"></div>
      <div className="h-[750px] w-full md:h-[901px] md:w-[660px] bg-slate-200"></div>
    </div>
  );
};

export default FestivalSkeleton;
