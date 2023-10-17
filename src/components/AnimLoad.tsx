"use client";

import * as motion from "@/components/motion/components";
import { HTMLMotionProps, Variant } from "framer-motion";
import { useState } from "react";

interface AnimLoadProps
  extends Omit<
    HTMLMotionProps<"div">,
    "variants" | "className" | "animate" | "onLoad"
  > {
  className?: string;
  variants: Record<"load" | "default", Variant>;
}

const AnimLoad = (props: AnimLoadProps) => {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <motion.div
      onLoad={() => setLoaded(true)}
      animate={isLoaded ? "default" : "load"}
      {...props}
      // variants={props.variants}
      // className={cx(props.className)}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimLoad;
