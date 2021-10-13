import React from "react";
import { Button, HelperButtonRow, HorizontalSpacer } from "./index";
import { useState, useEffect, useRef } from "react";
import {
  Keypair,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
  Commitment,
} from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useProgram } from "../hooks/useProgram";
import useWallet from "../hooks/useWallet";

export default function MainScreen() {
  const program = useProgram();
  const wallet = useWallet();

  useEffect(() => {
    // console.log(program?.provider.wallet.publicKey);
  }, []);

  return (
    <div>
      <HelperButtonRow>
        <Button>Airdrop SOL</Button>
        <HorizontalSpacer />
        <Button>Setup Metaplex NFTs</Button>
        <HorizontalSpacer />
      </HelperButtonRow>
    </div>
  );
}
