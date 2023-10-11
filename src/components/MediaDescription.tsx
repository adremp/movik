import * as motion from "@/components/motion/components";
import text from "@/shared/styles/text";
import { cx } from "class-variance-authority";
import { ReactNode } from "react";

interface MediaDescriptionProps {
  title: string;
  description: string;
  infoChild?: ReactNode;
  bottomChild?: ReactNode;
  className?: string;
}
const MediaDescription = (props: MediaDescriptionProps) => {
  return (
    <motion.div
      variants={{ expanded: {maxWidth: "auto"}, default: { maxWidth: "65ch" } }}
      className={cx(
        "z-[1] ga-[main] text-text-primary",
        props.className
      )}
      // className={cx("max-w-[65ch] z-[1] text-text-primary", props.className)}
    >
      <h1 className={text({ size: "100" })}>{props.title}</h1>
      <div className={text({ size: "20-400" }, "mt-35 tracking-[-0.1px]")}>
        {props.infoChild}
      </div>
      <p className={text({ size: "20-400" }, "mt-19")}>{props.description}</p>
      {props.bottomChild}
    </motion.div>
  );
};

export default MediaDescription;
