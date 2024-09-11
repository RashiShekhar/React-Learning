import React from "react";
import { IoWarningOutline } from "react-icons/io5";

export default function Alert() {
  return (
    <div className="border rounded-2xl bg-red-950 w-80 h-24 flex flex-col items-center justify-center p-4">
      <button className="flex flex-col items-center justify-center h-12 w-32 bg-transparent text-white rounded-lg">
        <IoWarningOutline className="text-xl mb-2" />
      </button>
      <span className="text-md text-center  text-white">
        Warning: Invalid email address!
      </span>
    </div>
  );
}
