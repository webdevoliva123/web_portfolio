import Footer from "@/components/global/Footer";
import Widget from "@/components/global/Widget";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Widget />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
