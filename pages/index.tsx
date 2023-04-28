import Head from "next/head";
import { useEffect } from "react";
import Gacha from "../components/Gacha";

export default function Home() {
  return (
    <>
      <Head>
        <title>TFT EggRoll TEST</title>
        <meta
          name="description"
          content="TFT Little Legend egg roll simulator"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className="title-heading">TFT Egg Roll</h1>
      <Gacha />
    </>
  );
}
