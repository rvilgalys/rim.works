import Layout from "../components/Layout";
import PortfolioCard from "../components/PortfolioCard";
import NavHeader from "../components/NavHeader";
import { useState } from "react";

const portfolio = [
  {
    title: "Pipeline Pro Tools 2.0",
    href: "https://app.pipelineprotools.com/",
    desc:
      "Ground-up rewrite of paid suite of tools for Real Estate lead capture.",
    image: "",
    tags: [
      "next.js",
      "react",
      "tailwind",
      "jamstack",
      "design",
      "dev",
      "datascraping",
    ],
    date: "2020",
  },
  {
    title: "SplitCrunch",
    href: "https://splitcrunch.com/",
    desc:
      "An app that helps real estate agents calcualte and compare their brokerage splits.",
    image: "",
    tags: ["next.js", "react", "tailwind", "jamstack", "design", "dev"],
    date: "2020",
  },
  {
    title: "Callster.io",
    href: "https://callster.io/",
    desc: "Content-gate for free real estate scripts.",
    image: "",
    tags: ["next.js", "react", "tailwind", "jamstack", "design", "dev"],
    date: "2020",
  },
  {
    title: "Nerdsheets",
    href: "https://nerdsheets.com/",
    desc: "Content-gate for free real estate calculators.",
    image: "",
    tags: ["next.js", "react", "tailwind", "jamstack", "design", "dev"],
    date: "2020",
  },
  {
    title: "Fizbonanza",
    href: "https://fizbonanza.com/",
    desc: "A data scraper and search engine for FSBO leads.",
    image: "",
    tags: [
      "next.js",
      "react",
      "tailwind",
      "jamstack",
      "design",
      "dev",
      "datascraping",
    ],
    date: "2020",
  },
  {
    title: "Food Fight!!!",
    href:
      "https://www.oculus.com/experiences/rift/2792691784081696/?locale=en_US",
    desc: "A VR Food Fight game.",
    image: "",
    tags: ["unity", "C#", "VR", "oculus", "design", "dev", "game"],
    date: "2018",
  },
  {
    title: "Brothers Vilgalys Spirits",
    href: "https://brothersvilgalys.com/",
    desc: "Producer of Craft Liqueurs",
    image: "",
    tags: [
      "founder",
      "spirits",
      "content",
      "distillery",
      "krupnikas",
      "wordpress",
    ],
    date: "2013-Present",
  },
  {
    title: "NC Spirits App",
    ios: "https://apps.apple.com/us/app/nc-spirits/id1126867541",
    android:
      "https://play.google.com/store/apps/details?id=com.goodbarber.ncspirits&hl=en_US",
    desc: "Directory of North Carolina Distilleries",
    image: "",
    tags: ["mobile", "spirits", "content", "distillery"],
    date: "2016",
  },
];

const Porfolio = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = portfolio.reduce(
    (result, { tags }) => [
      ...tags.filter((tag) => !result.includes(tag)),
      ...result,
    ],
    []
  );

  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((prevTag) => prevTag !== tag)
        : [tag, ...prev]
    );
  };

  const clearSelectedTags = () => setSelectedTags([]);

  return (
    <Layout>
      <NavHeader pathname="/portfolio"></NavHeader>
      <section className="w-full flex flex-col items-center mt-8">
        <h1 className="text-4xl uppercase font-hairline text-mtn leading-tight">
          {"Portfolio"}
        </h1>
        <section
          id="tags"
          className="w-full sm:w-1/2 border-b-2 border-t-2 border-sun py-6 px-6"
        >
          <span>{"select to filter: "}</span>
          <button
            className={
              (selectedTags.length === 0 ? "bg-sun" : "") +
              " border border-sun text-midnight px-2 mr-2 mt-1 rounded"
            }
            onClick={clearSelectedTags}
          >
            {"all"}
          </button>
          {allTags.map((tag) => (
            <button
              onClick={() => {
                handleTagClick(tag);
              }}
              className={
                (selectedTags.includes(tag)
                  ? "bg-mtn text-white border-mtn"
                  : "border-mtn text-mtn") +
                " border mr-2 mt-1 px-2 rounded hover:bg-stars hover:text-sun"
              }
            >
              {tag}
            </button>
          ))}
        </section>
      </section>
      <main className="w-full flex flex-wrap items-center justify-center px-10 overflow-y-auto">
        {portfolio.reduce(
          (result, data, index) =>
            selectedTags.length === 0 ||
            data.tags.some((tag) => selectedTags.includes(tag))
              ? [
                  ...result,
                  <PortfolioCard
                    key={index}
                    {...data}
                    selectedTags={selectedTags}
                    onTagClick={handleTagClick}
                  ></PortfolioCard>,
                ]
              : result,
          []
        )}
      </main>
    </Layout>
  );
};

export default Porfolio;
