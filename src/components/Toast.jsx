import React from "react";

export default function Toast() {
  return (
    <div
      className="flex flex-col items-start gap-2  "
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <div className="w-72 h-24 border bg-sky-500 rounded-2xl text-white text-center flex items-center justify-center p-4">
        New mail arrived.
      </div>
      <div className="w-72 h-24 border bg-green-500 rounded-2xl text-white text-center flex items-center justify-center p-4">
        Message sent successfully.
      </div>
    </div>
  );
}
