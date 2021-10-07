import styled from "styled-components";

export const MainBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
  height: 5rem;

  padding: 1rem;
`;

export const WalletButton = styled.div`
  background-color: #1da1f2;
  height: 2.5rem;
  width: 9rem;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HorizontalSpacer = styled.div`
  width: 1rem;
`;

export const Disconnected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  height: 100%;
  color: #949494;
`;

export const HelperButtonRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 1rem;
`;

export const Button = styled.div`
  cursor: pointer;
  background-color: #1da1f2;
  border-radius: 8px;
  height: 2rem;

  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
