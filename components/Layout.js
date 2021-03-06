import Head from "next/head";

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{"🦖 Rim.Works 🦕" + (title ? " | " + title : "")}</title>
      <link rel="stylesheet" href="https://use.typekit.net/zdk0lrz.css"></link>
    </Head>
    {children}
  </>
);

export default Layout;
