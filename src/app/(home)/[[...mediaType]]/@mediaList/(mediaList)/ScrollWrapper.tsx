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
  const isExpanded = useAppSelector((s) => s.home.mediaExpanded);

  const ref = useOnMountEl<HTMLDivElement>({ scrollTop });

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    set({ mediaScrollTop: e.currentTarget.scrollTop });
  };

  return (
    <motion.div
      ref={ref}
      onScroll={onScroll}
      initial={false}
      variants={{ expanded: { marginTop: 40 }, default: { marginTop: 85 } }}
      className={cx(
        "flex flex-col scrollbar w-page grow gap-15 mt-85",
        isExpanded ? "overflow-y-auto" : "overflow-hidden"
      )}
    >
      {props.children}
    </motion.div>
  );
};

export default ScrollWrapper;