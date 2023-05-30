import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic';

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false }
);

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <TopProgressBar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
