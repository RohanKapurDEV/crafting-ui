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
import useWallet from "../src/hooks/useWallet";
import { useProgram } from "../src/hooks/useProgram";
import { WalletProvider } from "../src/context/WalletContext";
import { ConnectionContext } from "../src/context/ConnectionContext";
import ConnectButton from "../src/components/ConnectButton";

require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {
  const { pubKey, wallet, connected } = useWallet();
  const program = useProgram();

  const buttonText = () => {
    if (connected) {
      return "Disconnect wallet";
    } else {
      return "Connect to wallet";
    }
  };

  useEffect(() => {
    console.log(pubKey?.toString());
  });

  return (
    <div>
      <MainBar>
        <ConnectButton>{buttonText()}</ConnectButton>
      </MainBar>
      {connected ? <MainScreen /> : <DisconnectedScreen />}
    </div>
  );
};

export default Home;
