import React from "react";

type componentProps = {
  placeholder?: string;
  rightComponent?: Function;
  className?: string;
  containerClass?: string;
};
export default function TextField({
  placeholder,
  rightComponent,
  className,
  containerClass,
}: componentProps) {
  return (
    <div className={containerClass}>
      <input
        placeholder={placeholder}
        style={{ border: "1px solid #D7E1F6", color: "rgba(100,122,168,.8)" }}
        className={`bg-light-hash rounded-md w-full text-base px-4 py-2 ${className}`}
      />
    </div>
  );
}
