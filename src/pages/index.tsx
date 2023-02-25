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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { publicKey, signMessage } = useWallet();
  return (
    <>
      <AppLayout>
        <div className="grid grid-cols-2 gap-10 mb-[40px]">
          <div>
            <Card>
              <div>
                Staking: dolor sit amet, consectetur adipiscing elit. Libero
                velit aliquet non habitasse eu mauris ... Learn more
              </div>

              <div className="flex">
                <div className="mr-6">
                  <Button label="Create New Stake" />
                </div>

                <Button label="Create New Stake" />
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <div className="flex">
                <div>
                  <div>
                    EPOC 265: Dolor sit amet, consectetur adipiscing elit.
                    Libero velit aliquet.
                  </div>

                  <div>
                    <Button label="How It works" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <BalanceCard />
        <div className="grid grid-cols-2 gap-10 mt-[40px]">
          <TopValidators />
          <MostRatedCollections />
        </div>

        <div className="mt-[36px]">
          <Tab />
        </div>

        {/* <Modal visible={true}></Modal> */}
      </AppLayout>
    </>
  );
}
