"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Step from "./Step";

const sidebarData = [
  {
    id: 1,
    title: "Your Info",
    path: "/",
  },
  {
    id: 2,
    title: "Select Plans",
    path: "/plan",
  },
  {
    id: 3,
    title: "Add-ons",
    path: "/add-ons",
  },
  {
    id: 4,
    title: "Summary",
    path: "/summary",
  },
];

const Sidebar = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  // useEffect(() => {
  //   activeStep === 1 &&
  //     activeStep === sidebarData.length 
  // }, [activeStep]);

  const handleClick = (id: number) => {
    const clickedStep = sidebarData.filter((elem) => elem.id === id);
    setActiveStep(clickedStep[0].id);
  };
  const renderData = sidebarData.map((elem) => {
    return (
      <Step
        key={elem.id}
        stepData={elem}
        handleClick={handleClick}
        activeStep={activeStep}
      />
    );
  });
  return (
    <aside className="bg-sidebar-image py-12 px-8 rounded-lg bg-center bg-cover bg-no-repeat min-w-[320px] h-[100%] max-h-[668px] ">
      <div className="flex flex-col gap-8 h-full">{renderData}</div>
    </aside>
  );
};

export default Sidebar;
