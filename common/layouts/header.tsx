import Button from "common/components/button";
import TextField from "common/components/input";
import Modal from "common/components/modal";
import Typography from "common/components/typography";

import React, { useCallback, useEffect, useRef, useState } from "react";

type AppProps = {
  title: string;
  breadcrumbs: string;
};
export default function Header({ breadcrumbs, title }: AppProps) {
  const [showOptionPopup, setShowOptionPopup] = useState(false);
  const [delegateStake, setDelegateState] = useState(false);
  const popupRef = useRef("");

  const handleClosePopup = (e) => {
    console.log(e.target);
    if (popupRef.current.contains(e.target)) {
      setShowOptionPopup(true);
    } else {
      setShowOptionPopup(false);
    }
  };
  const handleWindowClick = useCallback((e) => {
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
            className="text-light-color mr-2"
            label={title}
            variant="title"
          />
        }
        {<Typography label={breadcrumbs} variant="title" />}
      </div>
      <div className="w-full flex justify-end items-center">
        <Button>Connect wallet</Button>

        <div
          className="relative  pl-3 inline-block text-left"
          onClick={() => {
            setShowOptionPopup(!showOptionPopup);
          }}
        >
          <div ref={popupRef}>
            <button
              type="button"
              className="inline-flex rounded-xl items-center text-9xl w-full justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[35px]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#90A0C2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="5" cy="12" r="1" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
              </svg>
            </button>
          </div>
          {/*
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
  */}
          <div
            className={`absolute ${
              showOptionPopup
                ? "transform opacity-100 scale-100"
                : "transform opacity-0 scale-95"
            } right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Github
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
