import React from "react";
import { ReactChildrenPropsType } from "../../../types/global";

type ComponentProp = {
  leftComponent?: React.ReactNode;
  label?: string;
  theme?: "primary" | "orange";
  size?: "default" | "semi-big";
  outline?: boolean;
  children?: ReactChildrenPropsType;
};

export default function Button({
  leftComponent,
  label,
  outline,
  theme = "primary",
  size = "default",
  children,
}: ComponentProp) {
  const themeStyle = {
    primary: outline ? "border-primary text-primary" : "bg-primary text-white",
    orange: outline ? "border-orange text-orange" : "bg-orange text-white",
  };

  const paddingStyle = {
    default: "px-[24px] py-[12px]",
    "semi-big": "px-[24px] py-[9px]",
  };

  const heightStyle = {
    default: {
      height: "40px",
    },
    "semi-big": {
      height: "35px",
    },
  };

  return (
    <button
      style={{ borderWidth: "1px", ...heightStyle[size] }}
      className={`flex items-center ${paddingStyle[size]}    rounded-3xl ${themeStyle[theme]} `}
    >
      <div>{leftComponent}</div>
      <div className="text-base ">{label || <>{children}</>}</div>
    </button>
  );
}
