import Head from "next/head";

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{"rim.computer 🦕" + (title ? " | " + title : "")}</title>
      <link rel="stylesheet" href="https://use.typekit.net/zdk0lrz.css"></link>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦖</text></svg>"
      ></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta
        name="keywords"
        content="blog, writing, swe, software, vilgalys, business, culture, personal"
      ></meta>
      <meta
        name="description"
        content="Rim Vilgalys writes about tech, business & culture."
      ></meta>
      <meta name="author" content="Rim Vilgalys"></meta>
    </Head>
    {children}
  </>
);

export default Layout;
