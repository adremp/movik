import * as motion from "@/components/motion/components";
import routes from "@/shared/const/routes";
import action from "@/shared/styles/action";
import text from "@/shared/styles/text";
import Link from "next/link";
import { NavRouteKeys, Params } from "../_types";

// [title, href]
type ItemType = [string, NavRouteKeys];
const items: ItemType[] = [
  ["all", "index"],
  ["tv show", "shows"],
  ["movie", "movies"],
  // ["favorite", "index"],
];

const Nav = (props: Params) => {
  const mediaType = props.params.mediaType?.[0] ?? "index";

  return (
    <motion.div
      initial={false}
      transition={{ bounce: 0.1 }}
      variants={{
        expanded: { fontSize: "25px", maxHeight: "100%", opacity: 1 },
        full: { fontSize: "25px", maxHeight: "0%", opacity: 0 },
        default: { fontSize: "40px", maxHeight: "100%", opacity: 1 },
      }}
      className={"inline-flex mt-page mx-page text-text-primary gap-23"}
    >
      {items.map(([title, routeType]) => (
        <Link
          className={text(
            { size: "40" },
            action({ button: "opacity" }),
            "opacity-30 text-[inherit] whitespace-nowrap",
            mediaType === routeType && "opacity-100"
          )}
          href={routes[routeType]()}
          key={title}
        >
          {title}
        </Link>
      ))}
    </motion.div>
  );
};

export default Nav;
