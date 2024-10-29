import React from "react";

export default function Divider() {
  return (
    <div className="flex justify-center items-center flex-col gap-3 ">
      <div className="border bg-gray-300 w-56 h-16 rounded-2xl flex items-center justify-center">
        Content
      </div>
      <div className="border bg-gray-300 w-56 h-1 rounded-2xl flex items-center justify-center"></div>
      <div className="border bg-gray-300 w-56 h-16 rounded-2xl flex items-center justify-center">
        Content
      </div>
    </div>
  );
}
