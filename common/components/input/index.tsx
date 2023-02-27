import React from "react";

type componentProps = {
  placeholder: string;
};
export default function TextField({ placeholder }: componentProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        style={{ border: "1px solid #D7E1F6", color: "rgba(100,122,168,.8)" }}
        className="bg-light-hash rounded-md text-base px-4 py-2"
      />
    </div>
  );
}
