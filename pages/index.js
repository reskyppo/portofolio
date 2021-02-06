import Head from "next/head";

import Main from "../components/Main";

export default function Home() {
  return (
    <div className="bg-gray-50 px-5 md:px-20 py-10">
      <Head>
        <title>Reskyppo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
