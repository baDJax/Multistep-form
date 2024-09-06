'use client'
import React, { useState } from "react";
import PlanCard from "../components/PlanCard";
import Billing from "../components/Billing";
const planData = [
  {
    id:1,
    name: "Arcade",
    monthlyPrice: "9",
    yearlyPrice: "90",
    yearlyDiscount: "2",
    image: "/image/arcade.svg",
  },
  {
    id:2,
    name: "Advanced",
    monthlyPrice: "12",
    yearlyPrice: "120",
    yearlyDiscount: "2",
    image: "/image/advanced.svg",
  },
  {
    id:3,
    name: "Pro",
    monthlyPrice: "15",
    yearlyPrice: "150",
    yearlyDiscount: "2",
    image: "/image/pro.svg",
  },
];

const page = () => {
  const [checked, setChecked] = useState<number>(1)
  const [isShown, setIsShown] = useState<boolean>(false)
  
  const handleChecked = (id:number) => {
    setChecked(id)
  }
  const handleBillings = (shown:boolean) => {
    setIsShown(shown)
  }
  return (
    <div className="flex-1 overflow-auto w-full">
      <form className="">
        <h2 className="text-3xl font-bold text-personal mb-1">
          Select your plan
        </h2>
        <p className="text-neutral-400 mb-10">
          You have the option of monthly or yearly billing.
        </p>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-4 mb-8">
          {planData.map((plan)=>{
            return <PlanCard key={plan?.name} plan={plan!} handleChecked={handleChecked} checked={checked} isShown={isShown} />
          })}
        </div>
        <Billing handleBillings={handleBillings} />
      </form>
    </div>
  );
};

export default page;
