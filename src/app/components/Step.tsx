import Link from "next/link";
import React from "react";

interface StepInterface {
  stepData: {
    id: number;
    title: string;
    path: string;
  };
  handleClick: (id: number) => void;
  activeStep: number;
}

const Step: React.FC<StepInterface> = ({
  stepData,
  handleClick,
  activeStep,
}) => {
  const isActive = activeStep === stepData.id;

  return (
    <Link href={stepData?.path} onClick={() => handleClick(stepData?.id)}>
      <div className={`flex gap-4 items-center`}>
        <div
          className={`${
            isActive && "active"
          } h-10 w-10 rounded-full grid place-items-center border text-form font-bold border-form`}
        >
          {stepData?.id}
        </div>
        <div>
          <p className="text-neutral-300 text-sm">STEP {stepData?.id}</p>
          <h3 className="text-base font-bold text-white">{stepData?.title.toUpperCase()}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Step;
