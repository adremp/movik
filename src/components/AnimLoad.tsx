import * as motion from "@/components/motion/components";
import { cx } from "class-variance-authority";
import { Variant } from "framer-motion";
import { PropsWithChildren, useState } from "react";

interface AnimLoadProps extends PropsWithChildren {
  className?: string;
  variants: Record<"load" | "default", Variant>;
}

const AnimLoad = (props: AnimLoadProps) => {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <motion.div
      onLoad={() => setLoaded(true)}
      animate={isLoaded ? "default" : "load"}
      variants={props.variants}
      className={cx(props.className)}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimLoad;
