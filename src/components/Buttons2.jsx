import React from "react";

export default function Buttons2() {
  return (
    <div className="flex gap-3 items-center justify-center ">
      <button className="border rounded-lg px-3 py-2 bg-blue-500 text-black">
        <b> Info </b>
      </button>
      <button className="border rounded-lg px-3 py-2 bg-green-600 text-black">
        <b> Success </b>
      </button>
      <button className="border rounded-lg px-3 py-2 bg-yellow-500 text-black ">
        <b> Warning </b>
      </button>
      <button className="border rounded-lg px-3 py-2 bg-red-600 text-black">
        <b> Error </b>
      </button>
    </div>
  );
}
