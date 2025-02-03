import { motion } from "motion/react";
import Link from "next/link";

const spring = {
  type: "spring",
  damping: 30,
  stiffness: 450,
};

const BlogCard = ({
  data: {
    link,
    meta: { category, date, desc, title },
  },
}) => {
  return (
    <Link href={"/writing/" + link}>
      <motion.a
        layoutTransition={spring}
        className={
          "m-8 border-sun rounded-lg sun-shadow flex flex-col items-start" +
          " p-4 cursor-pointer"
        }
      >
        <h3 className="text-2xl font-display font-light text-mtn border-b-2 border-mtn">
          {title}
        </h3>
        <span>{date}</span>
        <span>{desc}</span>
      </motion.a>
    </Link>
  );
};

export default BlogCard;
