import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
