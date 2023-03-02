import Typography from "@/common/components/typography";
import React from "react";
import coin1 from "../../../../public/coin-1.png";

export type balanceCardDataProp = {
  title: string;
  info: string;
  fiatBalance: string;
  cryptoBalance: string;
  theme: "primary" | "secondary";
  img: string;
};
type componentProps = {
  data: balanceCardDataProp[];
};
export default function BalanceCard({ data }: componentProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data?.map((data, index) => {
        // const background = `[url(/coin-1.png})]`;
        // console.log(background);
        const outerBg: Record<"secondary" | "primary", string> = {
          secondary: "bg-white",
          primary: "bg-blue_2",
        };

        const innerBg: Record<"secondary" | "primary", string> = {
          secondary: "bg-light-hash",
          primary: "bg-primary",
        };

        return (
          <div key={index} className={`${outerBg[data.theme]}  p-2 rounded-xl`}>
            <div
              className={`px-[24px]  lg:bg-[length:40%] bg-[length:30%] pt-[32px] pb-[26px] bg-no-repeat bg-right-bottom ${
                innerBg[data.theme]
              } ${data.img} `}
            >
              <div className="flex items-center">
                <Typography
                  className={
                    data.theme == "primary" ? "text-white" : "text-dark"
                  }
                  label={data.title}
                  variant="body2"
                />
                <svg
                  width={18}
                  className="ml-2"
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 6.75H9.75V5.25H8.25V6.75ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15ZM9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5ZM8.25 12.75H9.75V8.25H8.25V12.75Z"
                    // fill="#D7E1F6"
                    fill={data.theme == "primary" ? "#D7E1F6" : "#90A0C2"}
                  />
                </svg>
              </div>

              <div className="flex">
                <Typography
                  variant="title"
                  // className="font-sans"
                  className={
                    data.theme == "primary"
                      ? "text-white font-sans"
                      : "text-dark font-sans"
                  }
                  label={data.fiatBalance}
                ></Typography>
                <div className="flex items-end pb-[5px] pl-1">
                  {" "}
                  <Typography
                    className={
                      data.theme == "primary"
                        ? "text-white font-sans"
                        : "text-dark font-sans"
                    }
                    variant="body1"
                    label={data.cryptoBalance}
                  ></Typography>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
