import Head from "next/head";

import Main from "../components/Main";

export default function Home() {
  return (
    <div className="px-5 md:px-20 bg-bg">
      <Head>
        <title>Reskyppo</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Main />
    </div>
  );
}
