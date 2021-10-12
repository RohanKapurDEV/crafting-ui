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

export default function MainScreen() {
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
