import React, { useState } from "react";

export default function Swap() {
  const [isSwap, setIsSwap] = useState(false);

  const text = isSwap ? "ON" : "OFF";

  return (
    <div
      className={`flex items-center justify-center border-0 text-black cursor-pointer p-2
                 bg-transparent`}
      onClick={() => setIsSwap(!isSwap)}
    >
      {text}
    </div>
  );
}
