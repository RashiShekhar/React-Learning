import React from "react";
import { useState } from "react";

export default function NavBar() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(0);
  };
  return (
    <div className="flex items-center border w-96 h-16 bg-gray-500 rounded-2xl p-2">
      <div className="flex items-center">
        <button
          className="border-0 px-4 py-2 rounded-md transition duration-500 hover:scale-1001111111111111111111111111111111111111111111111 hover:bg-sky-400"
          onClick={handleClick}
        >
          daisyUI
        </button>
      </div>
    </div>
  );
}
