import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import React, { ReactNode } from "react";
import {
  Box,
} from "@chakra-ui/react";

import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Site de l'Association Accompagner l'Autisme, créée en octobre 2016, à Orléans."
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Association Accompagner l'Autisme</title>
    </Head>
    <NavBar />
    <Box className="page-content">
    {children}
    </Box>
    <Footer />
  </div>
);

export default Layout;
