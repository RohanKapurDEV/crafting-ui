import React, { createContext, useState } from "react";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

import { Network, networks } from "../utils/networkInfo";

// Default to first network that has a defined program id
const DEFAULT_NETWORK = networks.find(
  (network: any) => network.programId !== undefined
);

export type ConnectionContextType = {
  networks: Network[];
  connection: Connection;
  setConnection: React.Dispatch<React.SetStateAction<Connection>>;
  endpoint?: Network;
  setEndpoint?: React.Dispatch<React.SetStateAction<Network>>;
};
const ConnectionContext = createContext<ConnectionContextType>({
  connection: new Connection(clusterApiUrl("devnet")),
  setConnection: () => {},
  networks,
});

const ConnectionProvider: React.FC = ({ children }) => {
  const [endpoint, setEndpoint] = useState(DEFAULT_NETWORK);

  if (!endpoint?.url) throw Error("Endpoint.url does not exist");

  const [connection, setConnection] = useState(
    new Connection(endpoint?.url, {
      commitment: "confirmed",
      wsEndpoint: endpoint?.wsEndpoint,
    })
  );

  const handleSetEndpoint = (newEndpoint: any) => {
    // Update both endpoint and connection state valuse in the same function
    // Will prevent extra rerenders of components that depend on both endpoint and connection
    setEndpoint(newEndpoint);
    setConnection(new Connection(newEndpoint.url, "confirmed"));
  };

  const state: ConnectionContextType = {
    networks,
    connection,
    setConnection,
    endpoint,
    setEndpoint: handleSetEndpoint,
  };

  return (
    <ConnectionContext.Provider value={state}>
      {children}
    </ConnectionContext.Provider>
  );
};

export { ConnectionContext, ConnectionProvider, networks };
