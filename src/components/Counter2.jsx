import React, { useState,useEffect } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
 

export default function Counter(){
    const [count,setCount]=useState(0)

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
      <div className="flex gap-2 items-center justify-center border-2 border-black bg-whitesmoke w-[13%] h-50% p-5px ">
        <h2> Default: </h2> 
        <div className="flex gap-2 items-center ">
        <button className="btn flex flex-direction-row size-5 items-center gap-1 space-x-0.5 text-black font-size-lg mr-0 text-lg text-black bg-transparent cursor-pointer justify-center" 
        onClick={handleDecrement}>
                <CiCircleMinus/>
            </button>
            </div>
            <div className="flex w-3 mx-0.5 space-x-0.5">
             {count}
             </div>
             <div className="flex gap-1 m-0 items-center"> 
            <button className="btn flex flex-direction-row size-5 space-x-0.5 items-center gap-1 font-size-lg mr-0 text-lg text-black bg-transparent cursor-pointer justify-center" 
            onClick={handleIncrement}>
                <CiCirclePlus/>
            </button>
            </div>
    </div>  
    );
}