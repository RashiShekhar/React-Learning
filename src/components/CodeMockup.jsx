import React from "react";

export default function CodeMockup() {
  return (
    <div className="flex border rounded-2xl bg-gray-950 w-96 h-24 flex-col items-start justify-start p-4 gap-2">
      <div className="flex items-start gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full bg-gray-700"></div>
      </div>
      <div className="text-white">without prefix</div>
    </div>
  );
}
