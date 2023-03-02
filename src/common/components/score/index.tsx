import React from "react";

export default function Score() {
  const h = [
    "bg-success",
    "bg-success",
    "bg-success",
    "bg-success",
    "bg-primary",
  ];
  return (
    <div className="flex">
      {h.map((data, index) => {
        return (
          <div
            className={`w-[16px]  mr-1 h-[16px] rounded-lg ${data}`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}
