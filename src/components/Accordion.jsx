import React, { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const AccordionItem = ({ item, children, isOpen, onClick }) => (
    <div className="border-b border-black rounded-md bg-gray-400 ">
      <button
        className="w-full p-4 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span>{item}</span>
        {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </button>
      {isOpen && <div className="p-6">{children}</div>}
    </div>
  );

  return (
    <div className="w-full join join-vertical bg-gray-500 rounded-lg">
      <AccordionItem
        item="Click to open this one and close others"
        isOpen={openIndex === 0}
        onClick={() => handleClick(0)}
      >
        hello
      </AccordionItem>
      <AccordionItem
        item="Click to open this one and close others"
        isOpen={openIndex === 1}
        onClick={() => handleClick(1)}
      >
        hello
      </AccordionItem>
      <AccordionItem
        item="Click to open this one and close others"
        isOpen={openIndex === 2}
        onClick={() => handleClick(2)}
      >
        hello
      </AccordionItem>
    </div>
  );
}
