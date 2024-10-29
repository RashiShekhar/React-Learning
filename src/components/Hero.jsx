import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-center items-center border w-60 h-60 bg-gray-400 rounded-md">
      <div className="flex flex-col justify-center items-center text-center">
        <h1>Hello there</h1>
        <p className="mb-4">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="border rounded-lg px-3 py-2 bg-purple-500 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
