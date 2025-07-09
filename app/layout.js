"use client";
import React, { useContext, useEffect, useState } from "react";
import { TokenICOContractProvider } from "../Context/TokenICOcontext";
import "../Styles/globals.css";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <TokenICOContractProvider>{children}</TokenICOContractProvider>
      </body>
    </html>
  );
};
export default RootLayout;
