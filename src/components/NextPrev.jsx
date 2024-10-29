import React from "react";
import { useState } from "react";

export default function NextPrev() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(0);
  };
  return (
    <div className="flex">
      <button
        className=" border-2 border-black rounded-s-lg px-3 py-2 bg-gray-700 text-white -ml-px hover:bg-sky-400 transition duration-500 hover:scale-105"
        onClick={handleClick}
      >
        <b> Previous page </b>
      </button>
      <button
        className=" border-2 border-black rounded-e-lg px-3 py-2 bg-gray-500 text-white -ml-px hover:bg-sky-400 transition duration-500 hover:scale-105"
        onClick={handleClick}
      >
        <b> Next </b>
      </button>
    </div>
  );
}
