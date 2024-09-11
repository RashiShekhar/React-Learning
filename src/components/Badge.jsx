import React from "react";

export default function Badge() {
  return (
    <div className="flex flex-row gap-3 items-center justify-center">
      <div className="border w-6 h-6 border-2 rounded-full border-purple-600 bg-blue-900"></div>
      <div className="border w-5 h-5 border-2 rounded-full border-purple-600 bg-pink-400"></div>
      <div className="border w-4 h-4 border-2 rounded-full border-purple-600 bg-pink-400"></div>
      <div className="border w-3 h-3 border-2 rounded-full border-purple-600 bg-pink-400"></div>
    </div>
  );
}
