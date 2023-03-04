import { useStore } from "@/store";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { ReactChildrenPropsType } from "types/global";
import Button from "../components/button";
import { FingerPrint } from "../components/icons";
import PageLoader from "../components/loader/pageLoader";
import Typography from "../components/typography";
import Header from "./header";
import Sidebar from "./sidebar";

type AppProps = {
  children: ReactChildrenPropsType;
  headerTitle: string;
  breadcrumbs?: string;
};

export default function AppLayout({
  breadcrumbs,
  headerTitle,
  children,
}: AppProps) {
  const { publicKey, wallet, disconnect } = useWallet();
  const { isPageReady, isLoading, error } = useStore();

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return (
      <div className="w-screen lg:h-screen overflow-hidden bg-primary flex items-center justify-center">
        <div className=" text-center">
          <FingerPrint
            style={{ width: "20%", height: "auto", margin: "auto" }}
          />
          <div className="my-7">
            <Typography
              variant="subtitle"
              font="proxima"
              color="text-white"
              label={error}
            />
          </div>
          <div className="flex items-center justify-center mb-7">
            <Button
              onClick={() => {
                window.location = window.location;
              }}
              label="Refresh"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-screen lg:h-screen overflow-hidden bg-background">
        <div className="lg:flex">
          <div className="w-[20%] bg-white h-screen lg:block hidden">
            <Sidebar />
          </div>

          <div className="w-full md:h-screen overflow-x-hidden overflow-y-scroll lg:px-[40px]md:px-[30px] px-[20px] pb-16">
            <Header
              account={publicKey}
              breadcrumbs={breadcrumbs || ""}
              title={headerTitle}
            />
            <div className="mt-[20px]"></div>

            {children}
          </div>
        </div>
      </div>
      <div id="modal"></div>
    </>
  );
}
