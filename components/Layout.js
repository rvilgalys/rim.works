import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{"🦖 Rim.Works 🦕"}</title>
      <link rel="stylesheet" href="https://use.typekit.net/zdk0lrz.css"></link>
    </Head>
    {children}
  </>
);

export default Layout;
