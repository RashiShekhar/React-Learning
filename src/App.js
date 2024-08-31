import React, { useState } from "react";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import { FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ToggleSwitch from "./components/ToggleSwitch";
import ToggleSwitch2 from "./components/ToggleSwitch2";
import Example from "./components/Example";

export default function App() {
  const [count, setCount] = useState(0);
  const [isToggle, setIsToggle] = useState(false);
  const [position, setPosition] = useState(0);
  return (
    <div className="flex flex-col space-y-4 h-screen items-center justify-center">
      <Counter />
      <Counter2 />
      <ToggleSwitch />
      <ToggleSwitch2 />
      <Example />
    </div>
  );
}
