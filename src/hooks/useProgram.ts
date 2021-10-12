import * as anchor from "@project-serum/anchor";
import idl from "../../public/idl.json";
import { Program } from "@project-serum/anchor";
import { useMemo } from "react";
import useConnection from "./useConnection";
import { useProvider } from "./useProvider";

export const programIdl = idl as anchor.Idl;

export const useProgram = (): Program | null => {
  const { endpoint } = useConnection();
  const provider = useProvider();

  if (!endpoint?.programId) throw Error("Endpoint is not defined :(");

  return useMemo(() => {
    if (endpoint.programId && provider) {
      return new Program(programIdl, endpoint.programId, provider);
    }
    return null;
  }, [endpoint.programId, provider]);
};
