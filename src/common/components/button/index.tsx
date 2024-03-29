import React, { MouseEventHandler } from "react";
import { ReactChildrenPropsType } from "../../../../types/global";

type ComponentProp = {
  leftComponent?: React.ReactNode;
  label?: string;
  theme?: "primary" | "orange" | "purple";
  size?: "default" | "semi-big";
  outline?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: ReactChildrenPropsType;
};

export default function Button({
  leftComponent,
  label,
  outline,
  onClick,
  theme = "primary",
  disabled,
  size = "default",
  children,
}: ComponentProp) {
  const themeStyle = {
    primary: outline ? "border-primary text-primary" : "bg-primary text-white",
    orange: outline ? "border-orange text-orange" : "bg-orange text-white",
    purple: outline ? "border-purple text-purple" : "bg-purple text-white",
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
      onClick={onClick}
      style={{ borderWidth: "1px", ...heightStyle[size] }}
      className={`flex items-center ${paddingStyle[size]}  ${
        disabled ? "opacity-50" : ""
      }   rounded-3xl ${themeStyle[theme]} `}
    >
      <div>{leftComponent}</div>
      <div className="text-base whitespace-nowrap ">
        {label || <>{children}</>}
      </div>
    </button>
  );
}
