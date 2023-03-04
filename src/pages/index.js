import Head from "next/head";
import HomePageContainer from "@/components/pages/HomePage/HomePageContainer";

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
      <HomePageContainer />
    </>
  );
}
