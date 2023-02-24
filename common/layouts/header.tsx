import { sidebarData } from "common/data/sidebar";
import React from "react";

type AppProps = {
  title: string;
};
export default function Header({ title }: AppProps) {
  return (
    <div className=" flex-row  py-7 flex">
      <div className="basis-1/3">{title}</div>
      <div className="w-full flex justify-end items-center">
        <img
          className="w-10 h-10 rounded-full float-right"
          src="https://images.pexels.com/photos/14811468/pexels-photo-14811468.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="Rounded avatar"
        />

        <div className="float-right">
          <div>Erisan A.</div>
          <div>123.3433</div>
        </div>
        <svg
          width={14}
          className="float-right"
          height={10}
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.828061 2.4243L6.28822 8.79618C6.37623 8.89883 6.4854 8.98123 6.60825 9.03772C6.7311 9.09422 6.86472 9.12347 6.99994 9.12347C7.13515 9.12347 7.26877 9.09422 7.39162 9.03772C7.51447 8.98123 7.62364 8.89883 7.71166 8.79618L13.1718 2.4243C13.6929 1.8161 13.2609 0.876648 12.4601 0.876648H1.53822C0.737436 0.876648 0.305405 1.8161 0.828061 2.4243Z"
            fill="#001540"
          />
        </svg>
      </div>
    </div>
  );
}
