import React from "react";
import { ReactChildrenPropsType } from "../../../types/global";

type ComponentProp = {
  leftComponent?: React.ReactNode;
  label?: string;
  theme?: "primary" | "orange";
  outline?: boolean;
  children?: ReactChildrenPropsType;
};

export default function Button({
  leftComponent,
  label,
  outline,
  theme,
  children,
}: ComponentProp) {
  return (
    <div className="flex items-center  ">
      <div>{leftComponent}</div>
      <div>{label || <>{children}</>}</div>
    </div>
  );
}
