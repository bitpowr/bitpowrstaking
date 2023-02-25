import React from "react";

export default function BalanceCard() {
  const data: {
    title: string;
    info: string;
    fiatBalance: string;
    cryptoBalance: string;
    theme: "primary" | "secondary";
  }[] = [
    {
      title: "Available balance",
      info: "Available balance",
      fiatBalance: "$7,000",
      cryptoBalance: "10,000 sol",
      theme: "primary",
    },
    {
      title: "Available balance",
      info: "Available balance",
      fiatBalance: "$7,000",
      cryptoBalance: "10,000 sol",
      theme: "secondary",
    },
    {
      title: "Available balance",
      info: "Available balance",
      fiatBalance: "$7,000",
      cryptoBalance: "10,000 sol",
      theme: "secondary",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.map((data, index) => {
        const outerBg: Record<"secondary" | "primary", string> = {
          secondary: "bg-white",
          primary: "bg-blue_2",
        };

        const innerBg: Record<"secondary" | "primary", string> = {
          secondary: "bg-lightHash",
          primary: "bg-primary",
        };

        return (
          <div key={index} className={`${outerBg[data.theme]}  p-2 rounded-xl`}>
            <div
              className={`px-[24px] pt-[32px] pb-[26px] ${
                innerBg[data.theme]
              } `}
            >
              <div>{data.title}</div>
              <div>
                <span>{data.fiatBalance}</span>
                <span>{data.cryptoBalance}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
