import Layout from "../components/Layout";
import Link from "next/link";
import ExternalLinkIcon from "../assets/ExternalLinkIcon";

const Index = () => {
  return (
    <Layout>
      <section
        id="landing"
        className="flex w-full flex-col pt-4 items-center mb-10"
      >
        <div className="sun rounded-full"></div>
        <h1 className="text-6xl uppercase font-hairline text-mtn border-b-2 border-mtn leading-tight">
          {"Rim Vilgalys"}
        </h1>
        <h2 className="text-3xl mt-4 font-hairline text-mtn mx-4 text-center">
          <span>{"Full Stack Developer "}</span>
          <span>{"& Founder of "}</span>
          <a
            href="https://brothersvilgalys.com/"
            target="_blank"
            rel="noopener"
            className="border-b border-mtn"
          >
            {"Brothers Vilgalys Spirits"}
          </a>
        </h2>
        <article
          id="tech-stack"
          className="flex flex-row flex-wrap items-center justify-around w-10/12 sm:w-1/2 mt-8 text-xl"
        >
          <span className="font-light text-space text-xl px-8 py-2 border border-sun rounded-lg sun-shadow">
            <p>
              {"Hello 👋 I'm Rim Vilgalys (he/him). I'm a Developer and UX Engineer from Durham, North Carolina. I make great stuff with React, Node.js, and Severless JAM-Stack apps. " +
                "I drink too much coffee, play ultimate, and love to travel when there isn't a worldwide pandemic. I care about kindness, good design, and a better world. 🌍 #blm"}
            </p>
            <p className="mt-2">
              {"I'm currently the Lead Developer at "}
              <a
                href="https://www.guerillarealty.com/"
                target="_blank"
                rel="noopener"
                className="border-b border-mtn"
              >
                {"Guerilla Realty"}
              </a>
              {
                ", building software and tools used by thousands of real estate agents."
              }
            </p>
          </span>
        </article>
        <nav className="flex flex-row flex-wrap items-center justify-between w-2/3 mt-8 py-4 px-4 font-light text-2xl text-mtn border-b border-t border-aville">
          <Link href="/portfolio">
            <span className="px-4 cursor-pointer my-2 aville-hover">
              {"Dev Portfolio"}
            </span>
          </Link>
          <Link href="/writing">
            <span className="px-4 cursor-pointer my-2 aville-hover">
              {"Writing"}
            </span>
          </Link>
          <Link href="/contact">
            <span className="px-4 cursor-pointer my-2 aville-hover">
              {"Contact"}
            </span>
          </Link>
          <a
            href="https://github.com/rvilgalys"
            target="_blank"
            rel="noopener noreferer"
            className=" flex px-4 cursor-pointer my-2 aville-hover"
          >
            <span>{"Github"}</span>
            <ExternalLinkIcon className="w-6 ml-1"></ExternalLinkIcon>
          </a>
        </nav>
      </section>
    </Layout>
  );
};

export default Index;
