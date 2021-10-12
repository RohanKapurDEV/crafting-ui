import React from "react";
import { Button, HelperButtonRow, HorizontalSpacer } from "./index";
import {
  useWallet,
  useConnection,
  useAnchorWallet,
} from "@solana/wallet-adapter-react";
import { useState, useEffect, useRef } from "react";
import {
  Keypair,
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
  Commitment,
} from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

export default function MainScreen() {
  const { connection } = useConnection();
  const { wallet, publicKey, signTransaction } = useWallet();

  const requestAirdrop = async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    try {
      const sig = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      await connection.confirmTransaction(sig, "confirmed");
    } catch (error) {
      console.error(error);
    }
  };

  const buildRandomTx = async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const tx = new Transaction();
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
