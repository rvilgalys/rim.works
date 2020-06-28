import Layout from "./Layout";
import NavHeader from "./NavHeader";

import { MDXProvider } from "@mdx-js/react";

const mdxComponents = {
  h1: (props) => (
    <h1
      className="text-3xl text-midnight px-4 w-fit-content border-b border-midnight font-light"
      {...props}
    ></h1>
  ),
  h2: (props) => (
    <h2
      className="text-2xl text-midnight w-fit-content font-light"
      {...props}
    ></h2>
  ),
  h3: (props) => (
    <h3
      className="text-xl text-midnight w-fit-content font-light"
      {...props}
    ></h3>
  ),
  p: (props) => (
    <p
      className="text-lg text-midnight font-light leading-snug mt-3 "
      {...props}
    ></p>
  ),
  pre: (props) => <pre className="rounded" {...props}></pre>,
};

const BlogLayout = ({ children, title }) => (
  <MDXProvider components={mdxComponents}>
    <Layout title={title}>
      <NavHeader pathname="/writing"></NavHeader>
      <main className="block pt-16 px-8 sm:px-32 w-typeography">
        {children}
      </main>
    </Layout>
  </MDXProvider>
);

export default BlogLayout;
