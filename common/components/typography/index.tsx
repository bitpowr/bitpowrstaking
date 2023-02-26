import React from "react";
import Body from "./body";
import Title from "./title";

type ComponentProps = {
  variant: "title" | "subtitle" | "heading3" | "body1" | "body2";
  label: string;
  color?: string;
  className?: string;
};
export default function Typography({
  className,
  variant,
  color,
  label,
}: ComponentProps) {
  const classStyle = {
    title: "text-xl font-recoleta font-bold",
    subtitle: "text-lg font-recoleta font-bold",
    heading3: "",
    body1: `text-sm ${color ?? "text-light-color"}`,
    body2: `text-base ${color ?? "text-light-color"} `,
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: label }}
      className={`${classStyle[variant]} ${className}  `}
    ></div>
  );
}
