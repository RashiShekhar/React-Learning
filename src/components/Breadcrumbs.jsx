import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function BreadCrumbs() {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <FaRegFolder />
      <div>Home</div>
      <IoIosArrowForward />
      <FaRegFolder />
      <div>Documents</div>
      <IoIosArrowForward />
      <MdOutlineCreateNewFolder />
      <div>Add Document</div>
    </div>
  );
}
