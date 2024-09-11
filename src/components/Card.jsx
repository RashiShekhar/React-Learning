import React from "react";

export default function Card() {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <div className="border w-96 h-64 rounded-2xl bg-gray-950 text-white flex flex-col items-center justify-center p-4">
        <div className="mb-4 text-center">
          <div className="text-lg font-bold">Cookies!</div>
          <div className="mt-2">We are using cookies for no reason.</div>
        </div>
        <div className="flex gap-4">
          <button className="border-2 w-24 h-10 rounded-xl bg-transparent hover:bg-purple-700 text-white">
            Accept
          </button>
          <button className="border-2 w-24 h-10 rounded-xl bg-transparent hover:bg-purple-700 text-white">
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
