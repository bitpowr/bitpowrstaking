import { sidebarData } from "common/data/sidebar";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/logo.png";

export default function Sidebar() {
  return (
    <div className="mt-10">
      <div className="p-4 pt-0  mb-[30px]">
        <Image src={profilePic} alt="Logo" />
      </div>

      {sidebarData.map((data, index) => {
        return (
          <div className="flex p-4 items-center" key={index}>
            <div
              className="mr-3"
              dangerouslySetInnerHTML={{ __html: data.icon }}
            ></div>
            <div>{data.title}</div>
          </div>
        );
      })}
    </div>
  );
}
