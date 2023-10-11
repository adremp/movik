import * as motion from "@/components/motion/components";
import routes from "@/shared/const/routes";
import action from "@/shared/styles/action";
import text from "@/shared/styles/text";
import Link from "next/link";
import { Params } from "../_types";

// [title, href]
type ItemType = [string, string];
const items: ItemType[] = [
  ["all", routes.home()],
  ["tv show", routes.shows()],
  ["movie", routes.movies()],
  ["favorite", routes.favorites()],
];

const Nav = (props: Params) => {
  const mediaType = props.params.mediaType?.[0] ?? "";

  return (
    <motion.div
      initial={false}
      transition={{ bounce: 0.1 }}
      variants={{
        expanded: { fontSize: "20px" },
        default: { fontSize: "40px" },
      }}
      // variants={{
      //   expanded: { scale: 0.5, originX: 0, originY: 0 },
      //   default: { scale: 1 },
      // }}
      className={"inline-flex text-text-primary gap-23"}
    >
      {items.map(([title, href]) => {
        const isCurrent = "/" + mediaType === href;
        return (
          <Link
            className={text(
              { size: "40" },
              action({ button: "opacity" }),
              "opacity-30 text-[inherit] whitespace-nowrap",
              isCurrent && "opacity-100"
            )}
            href={href}
            key={title}
          >
            {title}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Nav;
