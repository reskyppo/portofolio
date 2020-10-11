import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Reskyppo's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container ">
          <h1 className="text-purple-500 font-extrabold text-6xl text-center">
            Yo
          </h1>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}
