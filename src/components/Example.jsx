import React, { useState } from "react";

export default function Example() {
  const [position, setPosition] = useState(0);

  return (
    <div>
      <div className="relative border-2 border-black w-60 h-60">
        <div
          className={`absolute border rounded-full bg-black w-6 h-6  ${position} transition-all duration-700 `}
        ></div>
      </div>
      <div>
        <button
          className="border rounded-xl px-3 py-2 bg-black text-white"
          onClick={() => setPosition("top-0 left-0 bg-yellow-300")}
        >
          Top Left
        </button>
        <button
          className="border rounded-xl px-3 py-2 bg-black text-white"
          onClick={() => setPosition("left-[90%] top-0 bg-orange-200")}
        >
          Top Right
        </button>
        <button
          className="border rounded-xl px-3 py-2 bg-black text-white"
          onClick={() => setPosition("top-[90%] left-0 bg-lime-400")}
        >
          Bottom Left
        </button>
        <button
          className="border rounded-xl px-3 py-2 bg-black text-white"
          onClick={() =>
            setPosition("top-[90%] left-[90%] bg-sky-300 h-10 w-10")
          }
        >
          Bottom Right
        </button>
      </div>
    </div>
  );
}
