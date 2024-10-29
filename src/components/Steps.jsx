import React from "react";

export default function Steps() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex border border-black bg-white rounded-full w-8 h-8 items-center justify-center">
        <b>?</b>
      </div>
      <div className=" border  border-black  border-l-0 border-r-0 w-8 h-4 items-center justify-center"></div>
      <div className="flex border  border-black  bg-white rounded-full w-8 h-8 items-center justify-center">
        <b>!</b>
      </div>
      <div className="border  border-black border-l-0 border-r-0  w-8 h-4 items-center justify-center"></div>
      <div className=" flex   border-black border bg-white rounded-full w-8 h-8 items-center justify-center">
        <b>*</b>
      </div>
    </div>
  );
}
