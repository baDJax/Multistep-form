"use client";
import React from "react";
interface PlanInterface {
  plan: {
    id: number;
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    yearlyDiscount: string;
    image: string;
  };
  handleChecked: (id: number) => void;
  checked: number;
  isShown: boolean;
}

const PlanCard = ({ plan, handleChecked, checked, isShown }: PlanInterface) => {
  return (
    <>
      <label
        onClick={() => handleChecked(plan?.id)}
        className=""
        htmlFor={plan?.name}
        tabIndex={0}
      >
        <input className="hidden" type="radio" name="plan" id={plan?.name} />
        <div
          className={`${
            plan?.id === checked && "border-[#473DFF] bg-[#F0F6FF]"
          } hover:border-[#473DFF] transition-all border-[neutral-300] cursor-pointer border-solid border-[1px] p-4 rounded-lg `}
        >
          <img
            className="w-[40px] h-auto mb-16"
            src={plan?.image}
            alt="arcade"
          />
          <div className="details">
            <h4 className="font-bold text-personal text-lg">{plan?.name}</h4>
            <div className="text-sm text-[#9699AB] font-medium">
              {isShown ? (
                <>
                  <p>${plan?.yearlyPrice}/yr</p>
                  <p className="text-personal">{plan?.yearlyDiscount} months free</p>
                </>
              ) : (
                <p>${plan?.monthlyPrice}/mo</p>
              )}
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default PlanCard;
