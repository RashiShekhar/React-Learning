import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex border rounded-md bg-gray-950 w-96 h-16 flex-col items-center justify-center p">
      <span className="text-s text-white flex items-center">
        Copyright <FaRegCopyright className="mx-1" /> 2024 - All rights reserved
        by ACME
      </span>
      <span className="text-s  text-white">Industries Ltd</span>
    </div>
  );
}
