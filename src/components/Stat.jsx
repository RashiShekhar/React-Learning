import React from "react";

export default function Stat() {
  return (
    <div className="flex flex-col items-center justify-center border bg-gray-500 w-56 h-36 rounded-xl">
      <div className="text-center">Total Page Views</div>
      <div className="text-lg font-bold gap-2">89,400</div>
      <div className=" gap-2">21% more than last month</div>
    </div>
  );
}
