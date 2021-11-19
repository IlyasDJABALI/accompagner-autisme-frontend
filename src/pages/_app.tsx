import type { AppProps /*, AppContext */ } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Head from 'next/head'
import '../css/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Association Accompagner l'Autisme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
