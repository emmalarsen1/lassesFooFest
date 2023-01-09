import "../styles/globals.css";
import App from "next/app";
import Layout from "../components/Layout.js";
import { useState } from "react";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";

function MyApp({ Component, pageProps, bandData }) {
  const [state, setState] = useState("close");
  return (
    <SSRProvider>
      <Head>
        <title>GREENMARK FESTIVAL</title>
        <meta name="description" content="GREENMARK FESTIVAL" />
        <link rel="icon" href="/gmfavicon.svg" />
      </Head>
      <Layout state={state} setState={(state) => setState(state)}>
        <Component {...pageProps} bandData={bandData} setState={(state) => setState(state)} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const band = await fetch("https://greenmark.fly.dev/bands/");
  const bandData = await band.json();
  return { ...appProps, bandData };
};
