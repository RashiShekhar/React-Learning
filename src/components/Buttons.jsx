import React from "react";

export default function Buttons() {
  return (
    <div className="flex flex-row gap-3">
      <button className="border rounded-lg px-3 py-2 bg-black text-white">
        <b> Default </b>
      </button>
      <button className="border rounded-lg px-3 py-2 bg-gray-700 text-white">
        <b> Neutral </b>
      </button>
      <button className="border rounded-lg px-3 py-2 bg-purple-500 text-black ">
        <b> Primary </b>
      </button>
      <button className="border rounded-lg px-3 py-2 bg-pink-600 text-black">
        <b>Secondary </b>
      </button>
      <button className="border rounded-lg px-3 py-2 bg-green-500 text-black">
        <b>Accent </b>
      </button>
      <button className="border rounded-lg px-3 py-2 bg-gray-400 text-white">
        <b>Ghost </b>
      </button>
      <button className=" border-0 underline rounded-lg px-3 py-2 bg-transparent text-purple-700">
        <b>Link </b>
      </button>
    </div>
  );
}
