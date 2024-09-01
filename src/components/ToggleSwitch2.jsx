import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isToggle2, setIsToggle2] = useState(false);

  return (
    <div
      className={` relative  items-center border  w-16 h-8 cursor-pointer rounded-full bg-gray-300 `}
      onClick={() => setIsToggle2(!isToggle2)}
    >
      <div
        className={`absolute transition-all duration-150 w-6 h-6  flex border rounded-full 
            ${isToggle2 ? "left-[35px]" : "left-[3px]"} 
    bg-white top-[2px] animate-none`}
      />
    </div>
  );
}
