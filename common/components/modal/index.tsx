import React from "react";
import { ReactChildrenPropsType } from "types/global";
import Card from "../card";
import Portal from "./portal";

type ComponentProps = {
  children: ReactChildrenPropsType;
  onClose: Function;
  visible: boolean;
};

export default function Modal({ children, onClose, visible }: ComponentProps) {
  if (!visible) return null;
  return (
    <Portal selector="#modal">
      <div
        style={{
          background: "rgba(0, 14, 41, 0.7)",
          backdropFilter: "blur(10px)",
        }}
        className="h-screen w-screen pt-[8%] flex bg-slate-500 fixed z-10 top-0  justify-center"
      >
        <div className="w-1/3">
          {" "}
          <div className="flex justify-end">
            <svg
              width={28}
              height={28}
              onClick={() => onClose()}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7865 0.665527C24.3065 0.665527 27.3332 3.83886 27.3332 8.55886V19.4535C27.3332 24.1602 24.3065 27.3322 19.7865 27.3322H8.2265C3.7065 27.3322 0.666504 24.1602 0.666504 19.4535V8.55886C0.666504 3.83886 3.7065 0.665527 8.2265 0.665527H19.7865ZM18.0132 9.96019C17.5598 9.50553 16.8265 9.50553 16.3598 9.96019L13.9998 12.3322L11.6265 9.96019C11.1598 9.50553 10.4265 9.50553 9.97317 9.96019C9.51984 10.4135 9.51984 11.1602 9.97317 11.6122L12.3465 13.9869L9.97317 16.3469C9.51984 16.8135 9.51984 17.5469 9.97317 17.9989C10.1998 18.2255 10.5065 18.3469 10.7998 18.3469C11.1065 18.3469 11.3998 18.2255 11.6265 17.9989L13.9998 15.6402L16.3732 17.9989C16.5998 18.2402 16.8932 18.3469 17.1865 18.3469C17.4932 18.3469 17.7865 18.2255 18.0132 17.9989C18.4665 17.5469 18.4665 16.8135 18.0132 16.3602L15.6398 13.9869L18.0132 11.6122C18.4665 11.1602 18.4665 10.4135 18.0132 9.96019Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="mt-5"></div>
          <Card>
            <>{children}</>
          </Card>
        </div>
      </div>
    </Portal>
  );
}
