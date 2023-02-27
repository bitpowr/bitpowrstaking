import React from "react";
import { ReactChildrenPropsType } from "types/global";
import Body from "./body";
import Title from "./title";

type ComponentProps = {
  variant?: "title" | "subtitle" | "heading3" | "body1" | "body2" | "body3";
  label?: string;
  color?: string;
  className?: string;
  children?: ReactChildrenPropsType;
};
export default function Typography({
  className,
  variant = "body1",
  color,
  children,
  label,
}: ComponentProps) {
  const classStyle = {
    title: "text-xl font-recoleta font-bold",
    subtitle: "text-lg font-recoleta font-bold",
    heading3: "",
    body1: `text-sm ${color ?? "text-light-color"}`,
    body2: `text-base ${color ?? "text-light-color"} `,
    body3: `text-md ${color ?? "text-light-color"} `,
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: label ? label : "" }}
      className={`${classStyle[variant]} ${className}  `}
    >
      {children}
    </div>
  );
}
