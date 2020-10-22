import Head from "next/head";

import Main from "../components/Main";

export default function Home() {
  return (
    <div className="container bg-black mx-auto ">
      <Head>
        <title>Reskyppo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      
    </div>
  );
}
