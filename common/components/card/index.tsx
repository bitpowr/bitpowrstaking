import React from "react";
import { ReactChildrenPropsType } from "types/global";

type ComponentProps = {
  className?: string;
  background?: string;
  children: ReactChildrenPropsType;
  style?: object;
};
export default function Card({
  className = "",
  background,
  style,
  children,
}: ComponentProps) {
  return (
    <div
      style={style}
      className={`rounded-md ${
        background ?? "bg-white"
      }   py-[24px] px-[20px] ${className} shadow-card`}
    >
      {children}
    </div>
  );
}
