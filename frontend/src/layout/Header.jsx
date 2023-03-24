import React from "react";
import { WalletBtn } from "./WalletBtn";

const Header = ({ title }) => {
  return (
    <div className="flex col-span justify-between">
      <div>{title && <h1 className="text-white texl-2xl">{title}</h1>}</div>
      <WalletBtn />
    </div>
  );
};

export default Header;