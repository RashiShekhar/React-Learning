import React, { useState } from "react";

export default function Example() {
  const [position, setPosition] = useState(0);

  var Positionclass = " ";
  if (position === 0) {
    Positionclass = "left-0 left-[205px]  ";
  } else if (position === 1) {
    Positionclass = "top-0 top-[]";
  } else if (position === 2) {
    Positionclass = "right-0 top-0 ";
  } else if (position === 3) {
    Positionclass = " left-0 left-30 ";
  }

  /* 0 =left
     1=right
     2= top
     3=bottom
  */

  return (
    <div>
      <div className={`relative border-2 border-black w-60 h-60 `}>
        <div
          className={`absolute border rounded-full bg-black w-8 h-8 items-center justify-center ${Positionclass}`}
        ></div>
      </div>
      <div className=" flex gap-3 ">
        <button
          className=" border rounded-md bg-gray-400 px-3 py-2 text-white hover:bg-black hover:text-white transition-all duration-700  "
          onClick={() => setPosition(0)}
        >
          Left Bottom
        </button>
        <button
          className="border rounded-md  bg-gray-400 px-3 py-2 text-white hover:bg-black hover:text-white transition-all duration-900 "
          onClick={() => setPosition(1)}
        >
          bottom Right
        </button>
        <button
          className="border rounded-md  bg-gray-400 px-3 py-2 text-white hover:bg-black hover:text-white transition-all duration-900 "
          onClick={() => setPosition(2)}
        >
          Right Top
        </button>
        <button
          className="border rounded-md  bg-gray-400 px-3 py-2 text-white hover:bg-black hover:text-white transition-all duration-900 "
          onClick={() => setPosition(3)}
        >
          Top Left
        </button>
      </div>
    </div>
  );
}
