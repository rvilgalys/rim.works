import Layout from "../components/Layout";
import Link from "next/link";
import ExternalLinkIcon from "../assets/ExternalLinkIcon";
import ExtLink from "../components/ExtLink";

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
          <ExtLink href="https://rim.computer">https://rim.computer</ExtLink>
        </h2>
        <article
          id="tech-stack"
          className="flex flex-row flex-wrap items-center justify-around w-10/12 sm:w-1/2 mt-8 text-xl"
        >
          <span className="font-light text-space text-xl px-8 py-2 border border-sun rounded-lg sun-shadow">
            <p>
              Hello ✌️ I'm Rim Vilgalys. I'm a software engineer and writer
              interested in technology, culture, politics, business, ultimate
              frisbee, travel, and life in general. This site is a bit of a dev
              portfolio if I ever need work, and also a blog where I write about
              stuff.
            </p>
            <p className="pt-4">
              Before working in tech, I was the founder of{" "}
              <ExtLink href="https://brothersvilgalys.com/">
                {"Brothers Vilgalys Spirits"}
              </ExtLink>{" "}
              in Durham, NC. For 10 years we made Krupnikas Honey Liqueur, a
              spiced honey liqueur from a traditional Lithuanian recipe. We
              closed the distillery in 2023, but our Krupnikas recipe lives on
              at{" "}
              <ExtLink href="https://durhamdistillery.com/products/krupnikas-spiced-honey-liqueur">
                {"Durham Distillery."}
              </ExtLink>
            </p>
            <p className="pt-4">
              I currently work at Google as a SWE on the reCAPTCHA & Web Risk
              team.
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
            href="https://bsky.app/profile/rim.computer"
            target="_blank"
            rel="noopener noreferer"
            className=" flex px-4 cursor-pointer my-2 aville-hover"
          >
            <span>{"Bluesky"}</span>
            <ExternalLinkIcon className="w-6 ml-1"></ExternalLinkIcon>
          </a>
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
