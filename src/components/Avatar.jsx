import React from "react";

export default function Avatar() {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <div className="border w-16 h-16 rounded-full bg-gray-950 text-white flex items-center justify-center">
        <b>D</b>
      </div>
      <div className="border w-12 h-12 rounded-full bg-gray-950 text-white flex items-center justify-center">
        <b>AI</b>
      </div>
      <div className="border w-9 h-9 rounded-full bg-gray-950 text-white flex items-center justify-center">
        <b>SY</b>
      </div>
      <div className="border w-6 h-6 rounded-full bg-gray-950 text-white flex items-center justify-center">
        <b>UI</b>
      </div>
    </div>
  );
}
