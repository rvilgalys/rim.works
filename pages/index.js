import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <section id="landing" className="flex w-full flex-col pt-4 items-center">
        <div className="sun rounded-full"></div>
        <h1 className="text-6xl uppercase font-hairline text-aville border-b-2 border-aville leading-tight">
          {"Rim Vilgalys"}
        </h1>
        <h2 className="text-3xl mt-4 font-hairline text-aville">
          {"Full Stack Developer"}
        </h2>
        <nav className="flex flex-row items-center justify-around w-2/3 mt-8 py-4 text-2xl text-indigo-500 border-b border-t border-blue-200">
          <Link href="">
            <span className="px-4 border-r-2 border-l-2 border-transparent hover:border-indigo-200 cursor-pointer">
              {"Portfolio"}
            </span>
          </Link>
          <Link href="">
            <span className="px-4 border-r-2 border-l-2 border-transparent hover:border-indigo-200 cursor-pointer">
              {"Blog"}
            </span>
          </Link>
          <Link href="">
            <span className="px-4 border-r-2 border-l-2 border-transparent hover:border-indigo-200 cursor-pointer">
              {"Contact"}
            </span>
          </Link>
        </nav>
      </section>
    </Layout>
  );
};

export default Index;
