import React, { useState } from "react";
import Card from "../card";

export default function Tab({ data: tabData }) {
  const [current, setCurrent] = useState(tabData[0].header);

  return (
    <>
      <div className="text-sm font-medium text-center  border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px bg-white rounded-md">
          {tabData?.map((data, index) => {
            return (
              <li
                onClick={() => setCurrent(data.header)}
                className="mr-2"
                key={index}
              >
                <a
                  href="#"
                  className={`inline-block p-4 border-b-2 hover:border-primary  rounded-t-lg active hover:text-primary ${
                    data.header == current ? "text-primary border-primary " : ""
                  }`}
                  aria-current="page"
                >
                  {data.header}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-[16px]"></div>
      </div>
      {/* <Card> */}
      <>
        {tabData?.map((data, index) => {
          return (
            <div
              className={`${data.header == current ? "visible" : "hidden"}`}
              key={index}
            >
              {data.component}
            </div>
          );
        })}
      </>
      {/* </Card> */}
    </>
  );
}
