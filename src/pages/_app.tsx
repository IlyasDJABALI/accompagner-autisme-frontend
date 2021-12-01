import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { SWRConfig } from 'swr'
import fetchJson from '../lib/fetchJson'
import "../css/main.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
    <ChakraProvider>
        <Head>
          <title>Association Accompagner l&apos;Autisme</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;
