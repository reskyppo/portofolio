import Head from "next/head";

import Main from "../components/Main";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Reskyppo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
