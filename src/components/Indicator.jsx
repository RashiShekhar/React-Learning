import React from "react";

export default function Indicator() {
  return (
    <div className="flex items-center justify-center relative border w-20 h-20 border-black bg-gray-400  ">
      Content
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 border-2 border-white w-6 h-6 bg-black rounded-full"></div>
    </div>
  );
}
