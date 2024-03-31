import React from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "@styles/globals.css";

export const metadata = {
  title: "Promtopia",
  description: "Discover & Share AI prompts",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
