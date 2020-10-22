import Head from "next/head";

import Main from "../components/Main";

export default function Home() {
  return (
    <div className=" md:flex bg-white rounded-lg p-24 justify-center">
      <Head>
        <title>Reskyppo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
