import "./App.css";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landingpage from "./LandingPage";
import Layout from "./layout/Layout";
import Dashboard from "./dashboard/Dashboard";

import "./polyfills";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const App = () => {
  const { chains, provider } = configureChains(
    [mainnet, goerli],
    [infuraProvider({ apiKey: "51282d8221e64ba0a0b0e9dd604ea35a" }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "1inch Fusion Dashboard",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  const customTheme = {
    fonts: {
      body: `'Oxanium', cursive`,
    },
    colors: {
      connectButtonBackground: "#1CC3DD",
      connectButtonInnerBackground: "#1CC3DD",
      connectButtonText: "#1CC3DD",
    },
    radius: {
      connectButton: "0.375rem",
    },
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element:<Dashboard /> 

        },
      ],
    },
  ]);

  return (
    <>
      <div id="chartdiv" style={{ display: "none" }}></div>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: "#1CC3DD",
            accentColorForeground: "#163248",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "large",
          })}
        >
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default App;
