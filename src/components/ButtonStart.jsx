import React from "react";
import { FaRegHeart } from "react-icons/fa";

export default function ButtonStart() {
  return (
    <div className="flex items-center justify-center ">
      <button className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-blue-400 text-white">
        <FaRegHeart />
        <div>Button</div>
      </button>
      <button className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-blue-500 text-white">
        <div>Button</div>
        <FaRegHeart />
      </button>
    </div>
  );
}
