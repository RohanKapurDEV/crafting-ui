import "../styles/globals.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";

const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  );
}
export default MyApp;
