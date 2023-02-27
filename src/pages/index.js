import Head from "next/head";
import HomePage from "@/components/pages/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>YourTour Next</title>
        <meta name="description" content="Сайт для выбора путешествий" />
        <meta
          name="keywords"
          content="тур, идальные путешествия, горы, свой тур, фотографии тура"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
