import React from "react";

export default function Kbd() {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <button className="w-12 h-10 rounded-md bg-gray-400 border-2">
        <b>ctrl</b>
      </button>{" "}
      +
      <button className="w-12 h-10 rounded-md bg-gray-400 border-2">
        <b> shift</b>
      </button>{" "}
      +{" "}
      <button className="w-12 h-10 rounded-md  bg-gray-400 border-2">
        <b>del</b>
      </button>
    </div>
  );
}
