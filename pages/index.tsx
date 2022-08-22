import Head from "next/head";

import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Reskyppo</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Main />
    </>
  );
}
