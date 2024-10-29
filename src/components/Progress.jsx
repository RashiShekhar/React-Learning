import React, { useState } from "react";

export default function Progress() {
  const progressPercentage = useState(0);

  return (
    <div className="flex items-center justify-center flex-col gap-3 ">
      <div className="border border-black w-56 h-4 rounded-2xl overflow-hidden">
        <div className="h-full bg-gray-300" style={{ width: `${20}%` }}></div>
      </div>
      <div className="border border-black w-56 h-4 rounded-2xl overflow-hidden">
        <div className="h-full bg-gray-300" style={{ width: `${40}%` }}></div>
      </div>
      <div className="border border-black w-56 h-4 rounded-2xl overflow-hidden">
        <div className="h-full bg-gray-300" style={{ width: `${60}%` }}></div>
      </div>
      <div className="border border-black w-56 h-4 rounded-2xl overflow-hidden">
        <div className="h-full bg-gray-300" style={{ width: `${80}%` }}></div>
      </div>
      <div className="border border-black w-56 h-4 rounded-2xl overflow-hidden">
        <div className="h-full bg-gray-300" style={{ width: `${100}%` }}></div>
      </div>
    </div>
  );
}
