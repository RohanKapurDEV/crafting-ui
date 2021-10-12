import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import { TOKENS } from "@project-serum/tokens";
import { MARKETS } from "@mithraic-labs/serum";
/* eslint-disable */
import { MarketMeta } from "@mithraic-labs/market-meta";
import { ClusterName } from "../types";
import { Token } from "@mithraic-labs/market-meta/dist/types";
import { Program } from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token as SPLToken,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { FEE_OWNER_KEY } from "@mithraic-labs/psy-american";

export type Network = {
  name: ClusterName;
  url: string;
  fallbackUrl: string;
  programId: string | undefined;
  wsEndpoint?: string;
  serumReferrerIds: Record<string, PublicKey>;
};

// Note these network values are used for determining the asset list.
// Be sure to update that when modifying the order of this list.
const networks: Network[] = [
  {
    name: ClusterName.mainnet,
    url: "https://lokidfxnwlabdq.main.genesysgo.net:8899",
    fallbackUrl: clusterApiUrl("mainnet-beta"),
    wsEndpoint: "wss://lokidfxnWLaBDQ.main.genesysgo.net:8900",
    programId: process.env.NEXT_PUBLIC_MAINNET_PROGRAM_ID,
    serumReferrerIds: {
      EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: new PublicKey(
        "CzuipkNnvG4JaTQPjgAseWLNhLZFYxMcYpd2G8hDLHco"
      ),
    },
  },
  {
    name: ClusterName.devnet,
    url: "https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899",
    fallbackUrl: clusterApiUrl("devnet"),
    wsEndpoint: "wss://psytrbhymqlkfrhudd.dev.genesysgo.net:8900",
    programId: process.env.NEXT_PUBLIC_DEVNET_PROGRAM_ID,
    serumReferrerIds: {
      E6Z6zLzk8MWY3TY8E87mr88FhGowEPJTeMWzkqtL6qkF: new PublicKey(
        "4wpxNqqAqLtZscg1VZWnnBTQnzJSc42HtSitjpLfm3jz"
      ),
    },
  },
  {
    name: ClusterName.testnet,
    url: clusterApiUrl("testnet"),
    fallbackUrl: clusterApiUrl("testnet"),
    programId: process.env.NEXT_PUBLIC_TESTNET_PROGRAM_ID,
    serumReferrerIds: {},
  },
  {
    name: ClusterName.localhost,
    url: "http://127.0.0.1:8899",
    fallbackUrl: "http://127.0.0.1:8899",
    programId: process.env.NEXT_PUBLIC_LOCAL_PROGRAM_ID,
    serumReferrerIds: {},
  },
];

const getSupportedMarketsByNetwork = (name: ClusterName) => {
  switch (name) {
    case ClusterName.mainnet:
      return MarketMeta.mainnet.optionMarkets;
    case ClusterName.devnet:
      return MarketMeta.devnet.optionMarkets;
    case ClusterName.testnet:
      return MarketMeta.testnet.optionMarkets;
    case ClusterName.localhost:
      return [];
    default:
      return [];
  }
};

const getAssetsByNetwork = (name: ClusterName): Token[] => {
  switch (name) {
    case ClusterName.mainnet:
      return MarketMeta.mainnet.tokens;
    case ClusterName.devnet:
      // Devnet tokens and faucets can be found [here](https://github.com/blockworks-foundation/mango-client-ts/blob/main/src/ids.json#L10)
      return MarketMeta.devnet.tokens;
    case ClusterName.testnet:
      return MarketMeta.testnet.tokens;
    case ClusterName.localhost:
      try {
        /* eslint-disable */
        const localnetData = require("../../tmp/localnetData.json");
        return [TOKENS.mainnet[0], ...localnetData];
      } catch (err) {
        console.error("localnet data not found at ../../tmp/localnetData.json");
        return [];
      }
    default:
      return [];
  }
};

export { getAssetsByNetwork, networks, getSupportedMarketsByNetwork };
