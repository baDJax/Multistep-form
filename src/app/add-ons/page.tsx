import React from "react";

const subscriptionPlans = [
  {
    name: "Online Service",
    features: ["Access to multiplayer games"],
    yearlyPrice: 10,
  },
  {
    name: "Larger Storage",
    features: ["Extra 1TB cloud save"],
    yearlyPrice: 20,
  },
  {
    name: "Customizable Profile",
    features: ["Custom theme on your profile"],
    yearlyPrice: 20,
  },
];

const page = () => {
  return (
    <div className="flex-1 overflow-auto w-full">
      <form className="">
        <h2 className="text-3xl font-bold text-personal mb-1">Pick add-ons</h2>
        <p className="text-neutral-400 mb-10">
          Add-ons help to enhance your gaming experience.
        </p>
        <form className="">
          <div className="w-full border-[1px] rounded-lg p-8">
            <input type="checkbox" className="p-[10px]" />
            <label htmlFor="addOns"></label>
          </div>
        </form>
      </form>
    </div>
  );
};

export default page;
