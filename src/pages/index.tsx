import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useWallet } from "@solana/wallet-adapter-react";
import AppLayout from "common/layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { publicKey, signMessage } = useWallet();
  return (
    <>
      <AppLayout>
        <div></div>
      </AppLayout>
    </>
  );
}
