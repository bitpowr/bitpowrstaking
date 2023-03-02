import { useWallet } from "@solana/wallet-adapter-react";
import Button from "@/common/components/button";
import Typography from "@/common/components/typography";

import dynamic from "next/dynamic";

import React, { useCallback, useEffect, useRef, useState } from "react";

type AppProps = {
  title: string;
  breadcrumbs: string;
  account?: any;
};

const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletDisconnectButton,
  { ssr: false }
);

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Header({ breadcrumbs, title, account }: AppProps) {
  const [showOptionPopup, setShowOptionPopup] = useState(false);
  const [showAddressPopup, setShowAddressPopup] = useState(true);
  const [delegateStake, setDelegateState] = useState(false);
  const [showOptionToSwitchNetwork, setShowOptionToSwitchNetwork] =
    useState(true);
  const popupRef = useRef("");

  const handleClosePopup = (e: any) => {
    console.log(e.target);
    if (
      popupRef?.current &&
      popupRef.current.toString().includes(e.target.toString())
    ) {
      setShowOptionPopup(true);
    } else {
      setShowOptionPopup(false);
    }
  };
  const handleWindowClick = useCallback((e: MouseEvent): void => {
    handleClosePopup(e);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => window.removeEventListener("click", handleWindowClick);
  }, []);

  return (
    <div className=" flex-row  py-7 flex items-center">
      <div className="basis-1/2 flex items-center">
        {
          <Typography
            className={`mr-2 ${!breadcrumbs ?? "text-light-color"}`}
            label={title}
            variant="title"
          />
        }
        {<Typography label={breadcrumbs} variant="title" />}
      </div>
      <div className="w-full flex justify-end items-center">
        <div className="relative  pl-3 inline-block text-left">
          <div>
            {account && (
              <button
                onClick={() => {
                  setShowAddressPopup(!setShowAddressPopup);
                }}
                type="button"
                className="px-4 py-1 inline-flex rounded-xl items-center text-9xl w-full justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon w-7 h-auto mr-2 icon-tabler icon-tabler-folder-minus"
                  width={44}
                  height={44}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#90A0C2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                  <line x1={9} y1={13} x2={15} y2={13} />
                </svg>
                {account?.toBase58()}
              </button>
            )}
          </div>
        </div>

        <div className="mx-4"></div>
        <WalletMultiButtonDynamic />
      </div>
    </div>
  );
}
