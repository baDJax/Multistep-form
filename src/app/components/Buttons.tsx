import React from "react";

const Buttons = () => {
  return (
    <div className="flex">
      <button className="px-6 py-3 cursor-pointer text-base rounded-lg text-neutral-400 transition-all hover:text-personal bg-[#FAFBFF]">
        Go Back
      </button>
      <button className="px-6 py-3 cursor-pointer text-base rounded-lg  text-white border-none transition-all hover:bg-[#033D87] bg-personal ml-auto">
        Next Step
      </button>
    </div>
  );
};

export default Buttons;
