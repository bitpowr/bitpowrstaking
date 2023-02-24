import React from "react";
import { ReactChildrenPropsType } from "types/global";
import Header from "./header";
import Sidebar from "./sidebar";

type AppProps = {
  children: ReactChildrenPropsType;
};

export default function AppLayout({ children }: AppProps) {
  return (
    <div className="w-screen h-screen overflow-hidden bg-background">
      <div className="flex">
        <div className="w-[20%] bg-white h-screen">
          <Sidebar />
        </div>

        <div className="w-full px-[40px]">
          <Header title="Staking" />
          <div className="mt-[42px]"></div>

          {children}
        </div>
      </div>
    </div>
  );
}
