import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>Hello World</h1>
      </main>
    </>
  );
}
