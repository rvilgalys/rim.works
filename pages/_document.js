import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/zdk0lrz.css"
        ></link>
        <GoogleAnalytics gaId="G-KZHRMR7BVH"></GoogleAnalytics>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
