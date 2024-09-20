import React from "react";

const Stack = () => {
  return (
    <div className="flex flex-col w-full">
      <div className=" w-24 h-24 bg-purple-300 border rounded-md text-center flex items-center justify-center ">
        1
      </div>
      <div className=" w-24 h-24 bg-green-300 border rounded-md text-center flex items-center justify-center ">
        2
      </div>
      <div className=" w-24 h-24 bg-pink-300 border rounded-md text-center flex items-center justify-center ">
        3
      </div>
    </div>
  );
};

export default Stack;
