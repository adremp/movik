"use client";

import * as motion from "@/components/motion/components";
import useOnMountEl from "@/shared/hooks/useOnMountEl";
import { useAppSelector } from "@/stores";
import { useHomeActions } from "@/stores/home";
import { cx } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface ScrollWrapperProps extends PropsWithChildren {}

const ScrollWrapper = (props: ScrollWrapperProps) => {
  const { set } = useHomeActions();
  const scrollTop = useAppSelector((s) => s.home.mediaScrollTop);
  const animViewType = useAppSelector((s) => s.home.animViewType);

  const ref = useOnMountEl<HTMLDivElement>({ scrollTop });

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop < 200) {
			set({ mediaScrollTop: e.currentTarget.scrollTop });
		}
  };

  return (
    <motion.div
      ref={ref}
      onScroll={onScroll}
      initial={false}
			transition={{type: "spring", bounce: 0.1, duration: 0.3}}
      variants={{
        expanded: { translateY: "35vh", maxHeight: '65%' },
        full: { translateY: "0vh", maxHeight: "100%" },
        default: { translateY: "100vh", maxHeight: '100%' },
      }}
      className={cx(
        "absolute top-0 bottom-0 right-0 left-0 scrollbar grow gap-15",
        animViewType !== "default" ? "overflow-y-auto" : "overflow-hidden"
      )}
    >
      {props.children}
    </motion.div>
  );
};

export default ScrollWrapper;
