"use client";
import React, { useState } from "react";

interface BillingInterface{
    handleBillings:(isChecked:boolean)=>void
}

const Billing = ({handleBillings}: BillingInterface) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
    handleBillings(!isChecked)
  };
  return (
    <div className="bg-[#F0F6FF] flex justify-center items-center gap-4 p-4">
      <p className={`${!isChecked ? "text-personal" : "text-[#9699AB]"} text-sm font-bold`}>Monthly</p>
      <input
        onClick={handleClick}
        type="checkbox"
        id="billing"
        className="toggle [--tglbg:#02295A] bg-white hover:bg-white"
        checked={isChecked}
      />
      <p className={`${isChecked ? "text-personal" : "text-[#9699AB]"} text-sm font-bold`}>Yearly</p>
    </div>
  );
};

export default Billing;
