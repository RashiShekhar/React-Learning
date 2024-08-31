import React, { useState,useEffect } from "react";
import {FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function Counter(){
    const [count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(0);
    }
    const handleDecrement=()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    const handleIncrement=()=>{
        setCount(count+1);
    }


    useEffect(()=>{
        console.log('hello..');
    },[count])

    return(
        <div className="flex justify-center items-center border-2 border-black bg-whitesmoke">
            <div className="flex gap-2 items-center">
            <button className="btn flex items-center w-4 mx-3 bg-transparent font-size-medium cursor-pointer m-4s content-center  text-black fa-trash-can" onClick={handleClick}>
            <FaTrashCan/>
            </button>
            </div>
            <div className="flex gap-2 items-center">
            <button className="btn flex size-5 mx-1  items-center bg-transparent font-size-medium text-black cursor-pointer" onClick={handleDecrement}>
                <FaChevronDown/>
            </button>
            </div>
            <div className >

                {count}

            </div>
            <div className="flex gap-2">
            <button className="btn flex items-center mx-2 bg-transparent font-size-medium text-black cursor-pointer" onClick={handleIncrement}>
                <FaChevronUp/>
            </button>
            </div>
        </div>

    );
}