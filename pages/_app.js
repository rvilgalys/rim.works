import "../styles/styles.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-KZHRMR7BVH"></GoogleAnalytics>
    </>
  );
}
