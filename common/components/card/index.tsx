import React from "react";
import { ReactChildrenPropsType } from "types/global";

type ComponentProps = {
  className?: string;
  children: ReactChildrenPropsType;
};
export default function Card({ className = "", children }: ComponentProps) {
  return (
    <div
      className={`rounded-md bg-white  py-[24px] px-[20px] ${className} shadow-card`}
    >
      {children}
    </div>
  );
}
