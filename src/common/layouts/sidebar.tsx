import Typography from "@/common/components/typography";
import { sidebarData } from "@/common/data/sidebar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import profilePic from "../../../public/logo.png";

export default function Sidebar() {
  const [active, setActive] = useState("");

  return (
    <div className="mt-7">
      <div className="py-4 pl-5 pt-0  mb-[20px]">
        <Image src={profilePic} alt="Logo" />
      </div>

      {sidebarData.map((data, index) => {
        return (
          <Link key={index} href={data.to}>
            <div
              onClick={() => {
                data?.to && setActive(data.to);
              }}
              className={`flex transition ease-in-out ${
                active == data.to
                  ? "bg-light-blue-2 border-r-primary"
                  : "bg-white border-r-white"
              }  py-4 pl-5 items-center cursor-pointer hover:bg-light-blue-2 border-r-4 hover:border-r-primary `}
            >
              <div
                className="mr-3"
                dangerouslySetInnerHTML={{ __html: data.icon }}
              ></div>
              <Typography variant="body2" label={data.title} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
