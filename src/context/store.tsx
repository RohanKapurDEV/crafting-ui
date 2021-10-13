import React, { cloneElement } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { ConnectionProvider } from "./ConnectionContext";
import { WalletProvider } from "./WalletContext";
import theme from "../utils/theme";

const _providers: React.ReactElement[] = [
  // eslint-disable-next-line react/no-children-prop
  <ThemeProvider key="ThemeProvider" theme={theme} children={<div />} />,
  <ConnectionProvider key="ConnectionProvider" />,
  <WalletProvider key="WalletProvider" />,
];

// flatten context providers for simpler app component tree

const ProviderComposer: React.FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providers: any[];
}> = ({ providers, children }) =>
  providers.reduceRight(
    (kids, parent) => cloneElement(parent, { children: kids }),
    children
  );

const Store: React.FC = ({ children }) => (
  <ProviderComposer providers={_providers}>{children}</ProviderComposer>
);

export default Store;
