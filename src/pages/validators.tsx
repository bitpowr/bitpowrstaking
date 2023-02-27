import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useWallet } from "@solana/wallet-adapter-react";
import AppLayout from "common/layouts";
import TopValidators from "widgets/home/topValidators";
import MostRatedCollections from "widgets/home/mostRatedCollections";
import Card from "common/components/card";
import Tab from "common/components/tab";
import Button from "common/components/button";
import BalanceCard from "common/components/card/balanceCard";
import Modal from "common/components/modal";
import Typography from "common/components/typography";
import TransactionHistory from "widgets/home/transactionHistory";
import { useMemo } from "react";
import StakedAccount from "widgets/home/stackedAccount";
import ValidatorsTable from "widgets/validators";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { publicKey, signMessage } = useWallet();

  return (
    <>
      <AppLayout headerTitle="Validators">
        <div className="mb-[40px]">
          <div>
            <Card
              className="relative bg-[url('/security.png')] bg-no-repeat bg-right-bottom bg-[length:30%]"
              background="bg-light-purple"
            >
              {/* Close icon */}
              <div className="absolute right-5 top-5 cursor-pointer">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8337 5.34175L14.6587 4.16675L10.0003 8.82508L5.34199 4.16675L4.16699 5.34175L8.82533 10.0001L4.16699 14.6584L5.34199 15.8334L10.0003 11.1751L14.6587 15.8334L15.8337 14.6584L11.1753 10.0001L15.8337 5.34175Z"
                    fill="#647AA8"
                  />
                </svg>
              </div>
              {/*  */}
              <div className="w-1/2">
                <Typography
                  variant="body3"
                  label={`<span class='text-md text-dark font-recoleta'>Staking:</span> dolor sit amet, consectetur adipiscing elit. Libero
                velit aliquet non habitasse eu mauris ... <a class="text-purple underline">Learn more</a>`}
                ></Typography>
              </div>

              <div className="md:flex mt-[23px]">
                <div className="mr-6 md:mb-0 mb-2">
                  <Button theme="purple" label="Validators Performance" />
                </div>

                <Button
                  theme="purple"
                  leftComponent={
                    <svg
                      width={24}
                      className="mr-2"
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 16.5V7.5L16 12L10 16.5ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                        fill="#7B79FF"
                      />
                    </svg>
                  }
                  outline
                  label="How to pick a validator"
                />
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-[40px]">
          <ValidatorsTable />
        </div>

        {/* <Modal visible={true}></Modal> */}
      </AppLayout>
    </>
  );
}
