import Head from "next/head";
import { useEffect } from "react";
import Interface from "../components/Interface";

export default function Home() {
  return (
    <>
      <Head>
        <title>TFT EggRoll</title>
        <meta
          name="description"
          content="TFT Little Legend egg roll simulator"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1 className="title-heading">TFT Egg Roll</h1>
        <Interface />
      </div>
    </>
  );
}
