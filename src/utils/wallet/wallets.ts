import type WalletAdapter from "./walletAdapter";

import getPhantomAdapter from "./adapters/phantom";

type GetAdapterFunction = () => WalletAdapter | undefined;

interface Wallet {
  name: string;
  icon: string;
  getAdapter: GetAdapterFunction;
}

const wallets: Wallet[] = [
  {
    name: "Phantom",
    icon: "https://www.phantom.app/img/logo.png",
    getAdapter: getPhantomAdapter,
  },
];

export default wallets;
