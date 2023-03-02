import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useWallet } from "@solana/wallet-adapter-react";
import AppLayout from "@/common/layouts";
import TopValidators from "widgets/home/topValidators";
import MostRatedCollections from "widgets/home/mostRatedCollections";
import Card from "@/common/components/card";
import Tab from "@/common/components/tab";
import Button from "@/common/components/button";
import BalanceCard from "@/common/components/card/balanceCard";
import Modal from "@/common/components/modal";
import Typography from "@/common/components/typography";
import TransactionHistory from "widgets/home/transactionHistory";
import { useEffect, useMemo, useState } from "react";
import StakedAccount from "widgets/home/stackedAccount";
import { getAccountBalance } from "@/services/solana";
import { FingerPrint } from "@/common/components/icons";
import WalletMultiButtonDynamic from "@/common/layouts/walletMultiButtonDynamic";
import { useValidator } from "@/contexts/ValidatorsProviderContext";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { getValidators, topValidators } = useValidator();

  const { publicKey, wallet, disconnect, connected } = useWallet();

  const router = useRouter();

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    router.isReady && getValidators();
  }, [connected, router]);

  useEffect(() => {
    async function loadBalance() {
      if (connected && publicKey) {
        const b = await getAccountBalance(publicKey, "devnet");
        setBalance(b);
      }
    }
    loadBalance();
  }, [connected]);

  console.log(balance);

  const tabData = [
    {
      header: "Staked Accounts",
      component: useMemo(() => <StakedAccount />, []),
    },
    {
      header: "Transaction History",
      component: useMemo(() => <TransactionHistory />, []),
    },
  ];

  return (
    <>
      <AppLayout headerTitle="Staking">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 mb-[40px]">
          <div>
            <Card
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #DCE7FA 0%, #E5F2FA 100%)",
              }}
              background="bg-light-blue"
            >
              <div className="w-4/5">
                <Typography
                  variant="body2"
                  label={`<span class='text-md text-dark font-recoleta'>Staking:</span> dolor sit amet, consectetur adipiscing elit. Libero
                velit aliquet non habitasse eu mauris ... <a class="text-primary underline">Learn more</a>`}
                ></Typography>
              </div>

              <div className="md:flex mt-[23px]">
                <div className="mr-6 md:mb-0 mb-2">
                  <Button onClick={() => ""} label="Create New Stake" />
                </div>

                <Button
                  onClick={() => ""}
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
                        fill="#5285F2"
                      />
                    </svg>
                  }
                  outline
                  label="How It works"
                />
              </div>
            </Card>
          </div>

          <div className="h-full">
            <Card background="bg-light-orange" className="h-full">
              <div className="flex">
                <div className="w-2/3">
                  <div>
                    <Typography
                      label="EPOC 265: Dolor sit amet, consectetur adipiscing elit.
                    Libero velit aliquet."
                      variant="body2"
                    />
                  </div>

                  <div>
                    <Button
                      onClick={() => ""}
                      theme="orange"
                      outline
                      label="How It works"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <BalanceCard />
        <div className="lg:grid lg:grid-cols-2 w-full lg:gap-10 mt-[40px]">
          <MostRatedCollections />
          <TopValidators
            loading={topValidators.loading}
            data={topValidators.data}
            connected={connected}
          />
        </div>

        <div className="mt-[36px]">
          {connected ? (
            <Tab data={tabData} />
          ) : (
            <Card className="">
              <Typography variant="subtitle" label="Transaction History" />

              <div className="flex items-center py-10 text-center w-100 justify-center">
                <div>
                  <FingerPrint
                    style={{ width: "20%", height: "auto", margin: "auto" }}
                  />

                  <Typography
                    className="mt-3"
                    variant="body3"
                    label="You may need to connect your wallet to view your transactions"
                  />
                  <div className="flex justify-center mt-5">
                    <WalletMultiButtonDynamic />
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* <Modal visible={true}></Modal> */}
      </AppLayout>
    </>
  );
}
