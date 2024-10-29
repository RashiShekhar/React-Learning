import React from "react";
import { FaHouse } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";

export default function Menu() {
  return (
    <div className="flex flex-row border-0 w-28 h-12 bg-gray-200 justify-center items-center gap-3 rounded-xl">
      <button>
        <FaHouse />
      </button>
      <button>
        <FaInfoCircle />
      </button>
      <button>
        <HiOutlineChartBar />
      </button>
    </div>
  );
}
