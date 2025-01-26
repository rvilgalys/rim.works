import Layout from "../../components/Layout";
import NavHeader from "../../components/NavHeader";
import BlogCard from "../../components/BlogCard";

import { useState } from "react";

const Index = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const allCategories = posts.reduce(
    (result, { meta }) =>
      result.includes(meta.category) ? result : [...result, meta.category],
    []
  );

  return (
    <Layout>
      <NavHeader pathname="/writing"></NavHeader>
      <section className="w-full flex flex-col items-center mt-8">
        <h1 className="text-4xl uppercase font-hairline text-mtn leading-tight">
          {"Writing"}
        </h1>
        <section
          id="categories"
          className="w-full sm:w-1/2 border-b-2 border-t-2 border-sun py-6 px-6"
        >
          <span>{"categories: "}</span>
          <button
            type="button"
            className={
              (selectedCategory === "" ? "bg-sun" : "") +
              " border border-sun text-midnight px-2 mr-2 mt-1 rounded"
            }
            onClick={() => setSelectedCategory("")}
          >
            {"all"}
          </button>
          {allCategories.map((category) => (
            <button
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={
                (selectedCategory === category
                  ? "bg-mtn text-white border-mtn"
                  : "border-mtn text-mtn") +
                " border mr-2 mt-1 px-2 rounded hover:bg-stars hover:text-sun"
              }
            >
              {category}
            </button>
          ))}
        </section>
      </section>
      <main
        className={
          "w-full flex flex-wrap items-center justify-center px-10 overflow-y-auto"
        }
      >
        {posts.reduce(
          (result, data, index) =>
            selectedCategory === "" || selectedCategory === data.meta?.category
              ? [...result, <BlogCard key={index} data={data}></BlogCard>]
              : result,
          []
        )}
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  // using require here since it lets us parse exports
  const postContent = require.context("./", true, /\.mdx$/);
  const posts = postContent.keys().map((post) => {
    const link = post.substr(2).split(".")[0];
    const meta = postContent(post).meta;

    return {
      link,
      meta,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Index;
