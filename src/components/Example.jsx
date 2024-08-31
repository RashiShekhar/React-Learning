import React, { useState } from "react";

export default function Example() {
  const [position, setPosition] = useState(0);

  var Positionclass = " ";
  if (Positionclass === 0) {
    setPosition("left-[10]");
  } else if (Positionclass === 1) {
    setPosition("right: 0");
  } else if (Positionclass === 2) {
    setPosition("top:0");
  } else if (Positionclass === 3) {
    setPosition("bottom:0");
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
          className={`absolute border rounded-full bg-black w-8 h-8 items-center justify-center ${Positionclass} transition-all duration-700 `}
        ></div>
        <div className=" flex gap-3 ">
          <button
            className="border rounder-md bg-gray-300 px-3 py-2 text-white hover:bg-white hover:text-white  "
            onClick={() => {}}
          >
            Left
          </button>
          <button className="border rounder-md bg-gray-300 px-3 py-2 text-white hover:bg-white hover:text-white ">
            Right
          </button>
          <button>Top</button>
          <button>Bottom</button>
        </div>
      </div>
    </div>
  );
}
