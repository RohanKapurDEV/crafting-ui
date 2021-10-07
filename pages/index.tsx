import type { NextPage } from "next";
import { MainBar, HorizontalSpacer } from "../components/index";
import { useState, useEffect, useMemo } from "react";
import idl from "../public/idl.json";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  useEffect(() => {});

  return (
    <div>
      <MainBar>
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
      </MainBar>
    </div>
  );
};

export default Home;
