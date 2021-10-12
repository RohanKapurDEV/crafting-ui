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

import useConnection from "../hooks/useConnection";
import useWallet from "../hooks/useWallet";
import { programIdl, useProgram } from "../hooks/useProgram";

export default function MainScreen() {
  const { connection } = useConnection();
  const { wallet, pubKey } = useWallet();
  const program = useProgram();

  const requestAirdrop = async () => {
    if (!pubKey) throw new WalletNotConnectedError();

    try {
      const sig = await connection.requestAirdrop(pubKey, LAMPORTS_PER_SOL);
      await connection.confirmTransaction(sig, "confirmed");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <HelperButtonRow>
        <Button onClick={() => requestAirdrop()}>Airdrop SOL</Button>
        <HorizontalSpacer />
        <Button>Setup Metaplex NFTs</Button>
        <HorizontalSpacer />
      </HelperButtonRow>
    </div>
  );
}
