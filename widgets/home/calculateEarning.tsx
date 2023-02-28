import Button from "common/components/button";
import { ArrowLeft } from "common/components/icons";
import TextField from "common/components/input";
import Typography from "common/components/typography";
import React, { MouseEventHandler } from "react";

type componentProp = {
  onBack: MouseEventHandler<HTMLDivElement>;
};

export default function CalculateEarning({ onBack }: componentProp) {
  return (
    <>
      <div className="flex items-center mb-[40px]" onClick={onBack}>
        <ArrowLeft />
        <Typography variant="subtitle" className="ml-3" label="Calculator" />
      </div>
      <div className="mb-4">
        <Typography className="mb-2" label="Delegation Amount" />
        <TextField containerClass="w-100" />
      </div>
      <div className="mb-8">
        <Typography className="mb-2" label="Delegation Amount" />
        <TextField />
      </div>
      <Button onClick={() => ""} label="Calculate Rewards" />
    </>
  );
}
