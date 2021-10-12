import type { NextPage } from "next";
import { MainBar, HorizontalSpacer } from "../src/components/index";
import DisconnectedScreen from "../src/components/DisconnectedScreen";
import MainScreen from "../src/components/MainScreen";
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
  const { publicKey, connected } = useWallet();

  useEffect(() => {
    console.log(publicKey ? publicKey : "Nothing");
  });

  return (
    <div>
      <MainBar>
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
      </MainBar>
      {connected ? <MainScreen /> : <DisconnectedScreen />}
    </div>
  );
};

export default Home;
