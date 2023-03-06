import Button from "@/common/components/button";
import Card from "@/common/components/card";
import Typography from "@/common/components/typography";
import React, { MouseEventHandler } from "react";

type componentProp = {
  count: number;
  visible: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function MultipleValidatatorsButton({
  count,
  onClick,
  visible,
}: componentProp) {
  return (
    <div
      style={{ transform: "translateX(-50%)" }}
      className={`absolute transition left-[50%] ${
        visible ? "bottom-7 opacity-100" : "-bottom-17 opacity-0"
      }`}
    >
      <div className="rounded-[100px] py-3 shadow px-6 bg-white">
        <div className="flex items-center">
          <Typography
            variant="body2"
            color="text-dark"
            className="mr-3"
            label={`${count}  validators selected`}
          />
          <Button onClick={onClick} label="Delegate to all" />
        </div>
      </div>
    </div>
  );
}
