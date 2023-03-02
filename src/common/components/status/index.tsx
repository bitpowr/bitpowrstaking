import React from "react";
import { capitalizeWord } from "utils";
import Typography from "../typography";

type ComponentProps = {
  status: "pending" | "active";
};
export default function Status({ status }: ComponentProps) {
  const stylesBall = {
    pending: "bg-orange",
    active: "bg-success",
  };
  const stylesColor = {
    pending: "text-orange",
    active: "text-success",
  };
  return (
    <div className="flex items-center">
      <div
        className={`w-[8px] rounded-xl mr-2 h-[8px] ${stylesBall[status]}`}
      ></div>
      <Typography
        color={stylesColor[status]}
        label={capitalizeWord(status)}
        variant="body1"
      />
    </div>
  );
}
