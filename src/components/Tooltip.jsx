import React, { useState } from "react";

export default function Tooltip() {
  const [click, setClick] = useState(0);
  return (
    <div className="flex">
      <button className="border rounded-lg px-3 py-2 bg-gray-600 text-white ">
        <b> Hover me </b>
      </button>
    </div>
  );
}
