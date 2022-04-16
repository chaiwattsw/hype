import React from "react";

const TopItemsSkeleton = ({ rounded }) => {
  return (
    <div className="w-full flex gap-6 flex-col m-6">
      {[...Array(10)].map((_, idx) => (
        <div key={idx} className="animate-pulse flex items-center gap-6 w-1/2">
          <div
            className={`bg-slate-200 h-16 w-16 ${
              rounded ? "rounded-full" : ""
            }`}
          ></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopItemsSkeleton;
