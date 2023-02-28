import Button from "common/components/button";
import Typography from "common/components/typography";

import React, { useCallback, useEffect, useRef, useState } from "react";

type AppProps = {
  title: string;
  breadcrumbs: string;
};
export default function Header({ breadcrumbs, title }: AppProps) {
  const [showOptionPopup, setShowOptionPopup] = useState(false);
  const [showAddressPopup, setShowAddressPopup] = useState(true);
  const [delegateStake, setDelegateState] = useState(false);
  const [showOptionToSwitchNetwork, setShowOptionToSwitchNetwork] =
    useState(false);
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
            <button
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
              SgM4XSJn...PhGXVIqZayA
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
            className={`absolute mt-3 ${
              showAddressPopup
                ? "transform opacity-100 scale-100"
                : "transform opacity-0 scale-95"
            } 
            z-10 block bg-white divide-y divide-gray-100 rounded-lg shadow px-3 py-3 dark:bg-gray-700 dark:divide-gray-600
            
`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            {/* Dropdown menu */}

            <ul
              className="py-2 text-sm  dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li className="flex items-center">
                <img
                  style={{ minWidth: "35px", height: "35px" }}
                  className="rounded-full "
                  src="https://images.pexels.com/photos/10768835/pexels-photo-10768835.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt="Rounded avatar"
                />

                <Typography className="px-3" label="SgM4XSJn...PhGXVIqZayA" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon w-5 h-auto mr-3 icon-tabler icon-tabler-link"
                  width={44}
                  height={44}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#e5e7ed"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-auto icon icon-tabler icon-tabler-folders"
                  width={44}
                  height={44}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#e5e7ed"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                  <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
                </svg>
              </li>
              <li className="mt-4">
                <div id="accordionExample5 ">
                  <div className="rounded-lg border border-neutral-200 ">
                    <h2 className="mb-0" id="headingOne5">
                      <button
                        onClick={() => {
                          setShowOptionToSwitchNetwork(
                            !showOptionToSwitchNetwork
                          );
                        }}
                        className="group  relative flex w-full items-center rounded-lg  py-2 px-5 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
                        type="button"
                        data-te-collapse-init=""
                        data-te-target="#collapseOne5"
                        // style={{ backgroundColor: "r)" }}
                        aria-expanded="true"
                        aria-controls="collapseOne5"
                      >
                        <svg
                          fill="#fff"
                          className="w-5 h-auto"
                          width="800px"
                          height="800px"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 15.656v-0.031c0.281-3.625 1.594-6.344 3.875-8.063 2.25-1.75 4.688-2.594 7.344-2.594 2.781-0.031 5.375 0.906 7.688 2.781 2.344 1.844 3.5 4.594 3.5 8.156v0.219c0 3.594-1.156 6.281-3.5 8.125-2.344 1.875-4.938 2.813-7.719 2.813h-0.125c-2.719-0.031-5.219-0.969-7.531-2.844-2.313-1.844-3.5-4.688-3.531-8.563zM10.531 10.75v-4.938h-0.75c-0.156 0.188-0.281 0.406-0.406 0.594s-0.25 0.375-0.375 0.594c-0.125 0.188-0.281 0.438-0.375 0.625-0.125 0.188-0.219 0.375-0.313 0.594-0.188 0.313-0.344 0.625-0.469 0.906-0.156 0.281-0.281 0.563-0.375 0.813 0.188 0.125 0.406 0.281 0.656 0.375 0.281 0.094 0.563 0.188 0.844 0.25 0.313 0.063 0.594 0.094 0.844 0.125 0.281 0.031 0.531 0.063 0.719 0.063zM11.844 5.813v4.906c0.156 0 0.344 0.031 0.531 0 0.188 0 0.406-0.031 0.594-0.063 0.344-0.063 0.75-0.156 1.063-0.25 0.344-0.125 0.656-0.281 0.875-0.469-0.375-0.906-0.781-1.625-1.188-2.313s-0.875-1.281-1.375-1.781v-0.031h-0.5zM8.469 6.094v-0.031c-0.219 0.094-0.438 0.25-0.688 0.344-0.219 0.094-0.5 0.219-0.719 0.344-0.438 0.219-0.875 0.469-1.313 0.75-0.406 0.281-0.813 0.594-1.156 0.906 0.125 0.125 0.281 0.25 0.406 0.344s0.281 0.219 0.438 0.344c0.125 0.063 0.281 0.156 0.438 0.281 0.156 0.094 0.344 0.219 0.531 0.344 0.25-0.563 0.5-1.156 0.813-1.688 0.313-0.563 0.656-1.094 1-1.563 0.031-0.063 0.063-0.125 0.125-0.188 0.031-0.031 0.063-0.125 0.125-0.188zM18.031 8.406v-0.031c-0.781-0.594-1.469-1.094-2.156-1.406s-1.375-0.625-2-0.875c0.5 0.5 0.938 1.125 1.219 1.719 0.313 0.625 0.625 1.281 0.875 1.906 0.125-0.063 0.281-0.125 0.469-0.25 0.156-0.094 0.375-0.188 0.563-0.281 0.188-0.125 0.344-0.25 0.531-0.375 0.188-0.156 0.375-0.281 0.5-0.406zM17.5 15.375h3.594c0-1.156-0.25-2.25-0.719-3.375-0.438-1.094-1.063-2-1.844-2.781v-0.031c-0.156 0.25-0.375 0.469-0.594 0.625-0.25 0.156-0.469 0.281-0.719 0.406-0.156 0.094-0.313 0.219-0.469 0.281-0.156 0.094-0.375 0.156-0.531 0.25 0.125 0.25 0.25 0.531 0.375 0.781 0.094 0.281 0.25 0.594 0.313 0.875 0.188 0.5 0.313 1.031 0.438 1.563 0.094 0.469 0.156 0.969 0.156 1.406zM6.188 10.75v-0.031c-0.25-0.125-0.531-0.219-0.75-0.344-0.219-0.156-0.438-0.313-0.625-0.438-0.188-0.094-0.375-0.219-0.531-0.344s-0.281-0.25-0.406-0.375c-0.813 0.781-1.406 1.656-1.781 2.688-0.406 1.031-0.688 2.188-0.813 3.438h3.844c0-0.875 0.125-1.719 0.344-2.563 0.188-0.875 0.469-1.531 0.719-2.031zM10.531 15.344v-3.594c-0.25 0.031-0.563 0.031-0.844 0-0.313-0.031-0.625-0.125-0.906-0.219-0.25-0.063-0.563-0.125-0.813-0.219-0.281-0.063-0.563-0.188-0.781-0.313-0.188 0.313-0.344 0.688-0.469 1.094-0.156 0.375-0.25 0.781-0.344 1.156-0.063 0.375-0.094 0.781-0.125 1.125s-0.063 0.688-0.063 0.969h4.344zM11.844 11.813v3.531h4.625c0-0.188 0-0.406-0.031-0.656-0.063-0.219-0.094-0.5-0.125-0.75-0.094-0.375-0.188-0.781-0.313-1.156-0.125-0.344-0.25-0.688-0.406-0.969-0.063-0.156-0.125-0.344-0.188-0.469-0.094-0.156-0.188-0.25-0.25-0.344-0.344 0.25-0.813 0.406-1.375 0.531-0.531 0.125-1.156 0.25-1.719 0.281h-0.219zM5.125 16.375h-3.844c0 0.531 0.094 1.125 0.25 1.844 0.156 0.75 0.469 1.438 0.813 2.188 0.156 0.375 0.344 0.75 0.531 1.125 0.219 0.344 0.469 0.719 0.719 1.063 0.188-0.125 0.375-0.219 0.531-0.313 0.188-0.094 0.406-0.219 0.594-0.313 0.219-0.094 0.438-0.188 0.688-0.313 0.219-0.094 0.5-0.219 0.781-0.344-0.25-0.781-0.531-1.531-0.719-2.375-0.219-0.813-0.344-1.625-0.344-2.531v-0.031zM10.531 20.031v-3.656h-4.344c0 0.25 0.031 0.625 0.094 1 0.031 0.375 0.125 0.781 0.188 1.188 0.125 0.438 0.219 0.875 0.344 1.25s0.25 0.688 0.375 0.969c0.563-0.219 1.125-0.375 1.5-0.469 0.406-0.125 0.781-0.219 1.156-0.25h0.344c0.125-0.031 0.25-0.031 0.344-0.031zM11.844 16.375v3.625c0.219 0.031 0.469 0.063 0.719 0.094 0.281 0.031 0.625 0.094 0.906 0.156l0.469 0.094c0.156 0.063 0.344 0.094 0.5 0.125 0.188 0.063 0.375 0.094 0.563 0.156 0.156 0.063 0.313 0.094 0.438 0.156 0.406-1.031 0.656-1.875 0.813-2.594 0.156-0.688 0.219-1.281 0.219-1.781v-0.031h-4.625zM21.094 16.406v-0.031h-3.594v0.188c-0.031 0.594-0.125 1.281-0.25 2-0.125 0.688-0.406 1.5-0.781 2.5 0.5 0.25 0.969 0.5 1.344 0.75s0.719 0.531 0.969 0.781c0.531-0.531 1-1.25 1.406-2.188 0.406-0.906 0.688-1.844 0.844-2.844 0.031-0.188 0.031-0.375 0.063-0.563v-0.594zM10.531 25.906v-4.875c-0.781 0.125-1.438 0.281-1.938 0.406s-0.875 0.25-1.125 0.375c0.188 0.469 0.375 0.875 0.563 1.25 0.188 0.344 0.406 0.719 0.594 1.031 0.063 0.125 0.188 0.25 0.281 0.406 0.094 0.125 0.156 0.281 0.25 0.406 0.094 0.156 0.188 0.344 0.281 0.531 0.125 0.156 0.219 0.344 0.344 0.469h0.75zM11.844 25.906h0.719c0.281-0.219 0.563-0.531 0.781-0.875 0.25-0.344 0.531-0.75 0.719-1.094 0.219-0.406 0.438-0.781 0.625-1.156s0.344-0.719 0.469-0.969c-0.344-0.125-0.813-0.25-1.281-0.375s-1.125-0.25-2.031-0.375v4.844zM18.031 23.344v-0.031c-0.063-0.094-0.188-0.219-0.281-0.313s-0.25-0.219-0.406-0.313c-0.125-0.094-0.281-0.188-0.469-0.281s-0.438-0.219-0.656-0.344c-0.125 0.25-0.344 0.688-0.656 1.281-0.281 0.594-0.781 1.313-1.406 2.094 0.781-0.125 1.469-0.406 2.094-0.781 0.688-0.344 1.281-0.813 1.781-1.313zM6.406 22.344v-0.031c-0.219 0.125-0.563 0.281-0.906 0.438-0.375 0.156-0.781 0.344-1.156 0.594 0.219 0.188 0.438 0.375 0.625 0.5 0.188 0.156 0.406 0.281 0.594 0.406 0.344 0.219 0.75 0.438 1.156 0.625s0.906 0.375 1.531 0.563c-0.219-0.25-0.375-0.563-0.531-0.813s-0.344-0.5-0.5-0.75-0.281-0.531-0.406-0.781c-0.156-0.25-0.281-0.5-0.406-0.75z" />
                        </svg>
                        Mainnet
                        <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseOne5"
                      className={`${
                        showOptionToSwitchNetwork ? "!visible" : "hidden"
                      }`}
                      data-te-collapse-item=""
                      data-te-collapse-show=""
                      aria-labelledby="headingOne5"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          TESTNET
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          MAINNET
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          DEVNET
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="py-2 flex items-center">
                  <svg
                    width="800px"
                    className="w-5 h-auto"
                    height="800px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      d="M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
                    />
                    <path
                      fill="#fff"
                      d="M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
                    />
                  </svg>
                  <a
                    href="#"
                    className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Disconnect
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Button onClick={() => ""}>Connect wallet</Button>

        {/* <div className="relative  pl-3 inline-block text-left">
          <div>
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
        </div> */}
      </div>
    </div>
  );
}
