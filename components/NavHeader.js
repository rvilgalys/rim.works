import Link from "next/link";

const NavHeader = ({ pathname }) => {
  return (
    <header className="w-full flex flex-row items-center h-20 px-4 sm:px-12 pt-2 justify-between">
      <Link href="/">
        <a className="sun sun-sm rounded-full h-20 self-start flex flex-col items-center justify-center"></a>
      </Link>
      <nav>
        <Link href="/portfolio">
          <a
            className={
              (pathname === "/portfolio"
                ? "bg-stars text-white border-stars"
                : "text-stars border-sun") +
              " text-xl mr-2 sm:mr-6 border-b-2 border-t-2 px-2 py-1 hover:border-stars hover:bg-stars hover:text-white"
            }
          >
            {"Portfolio"}
          </a>
        </Link>
        <Link href="/writing">
          <a
            className={
              (pathname === "/writing"
                ? "bg-stars text-white border-stars"
                : "text-stars border-sun") +
              " text-xl mr-2 sm:mr-6 border-b-2 border-t-2 px-2 py-1 hover:border-stars hover:bg-stars hover:text-white"
            }
          >
            {"Writing"}
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={
              (pathname === "/contact"
                ? "bg-stars text-white border-stars"
                : "text-stars border-sun") +
              " text-xl mr-2 sm:mr-6 border-b-2 border-t-2 px-2 py-1 hover:border-stars hover:bg-stars hover:text-white"
            }
          >
            {"Contact"}
          </a>
        </Link>
        <a
          className="text-xl text-stars mr-2 sm:mr-6 border-b-2 border-t-2 border-sun px-2 py-1 hover:border-stars hover:bg-stars hover:text-white"
          href="https://github.com/rvilgalys"
          target="_blank"
          rel="noopener noreferer"
        >
          Github
        </a>
      </nav>
    </header>
  );
};

export default NavHeader;
