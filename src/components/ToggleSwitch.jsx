import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div
      className={`flex items-center border w-16 h-8 cursor-pointer rounded-full p-1
    ${isToggle ? "justify-end" : "justify-start"}
    bg-gray-300`}
      onClick={() => setIsToggle(!isToggle)}
    >
      <div className={`w-6 h-6 bg-white flex border rounded-full `} />
    </div>
  );
}
