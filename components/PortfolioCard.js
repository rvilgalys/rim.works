import { motion } from "framer-motion";
import ExternalLinkIcon from "../assets/ExternalLinkIcon";

const spring = {
  type: "spring",
  damping: 30,
  stiffness: 450,
};

const PortfolioCard = ({
  title,
  href,
  tags,
  desc,
  date,
  selectedTags,
  onTagClick,
}) => {
  return (
    <motion.div
      layoutTransition={spring}
      className="w-64 m-8 border-sun rounded-lg sun-shadow flex flex-col items-start p-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-display font-light text-mtn border-b-2 border-mtn">
          {title}
        </h3>
        <a
          href={href}
          rel="noopener"
          target="_blank"
          className="ml-3 border border-aville px-2 py-1 rounded text-md text-stars inline-flex items-center nowrap"
        >
          {"Visit"}
          <ExternalLinkIcon className="w-6 ml-1"></ExternalLinkIcon>
        </a>
      </div>
      <span className="mt-2 text-midnight w-full text-lg font-light">
        {desc}
      </span>
      <div className="flex items-center w-full flex-wrap">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => {
              onTagClick(tag);
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
      </div>
      <span className="mt-2 text-mtn">{date}</span>
    </motion.div>
  );
};

export default PortfolioCard;
