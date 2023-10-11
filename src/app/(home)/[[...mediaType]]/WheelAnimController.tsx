"use client";

import * as motion from "@/components/motion/components";
import { useAppSelector } from "@/stores";
import { useHomeActions } from "@/stores/home";
import { PropsWithChildren, useEffect } from "react";

interface ScrollProps extends PropsWithChildren {}

const ScrollController = (props: ScrollProps) => {
  const expanded = useAppSelector((s) => s.home.mediaExpanded);
  const scrollTop = useAppSelector((s) => s.home.mediaScrollTop);
  const { set } = useHomeActions();

  useEffect(() => {
    const onScroll = (e: WheelEvent) => {
      if (e.deltaY > 0 && !expanded) {
        set({ mediaExpanded: true });
      } else if (e.deltaY < 0 && scrollTop === 0) {
        set({ mediaExpanded: false });
      }
    };
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  }, [expanded, scrollTop]);

  return (
    <motion.div
      className="w-full h-full"
      animate={expanded ? "expanded" : "default"}
    >
      {props.children}
    </motion.div>
  );
};

export default ScrollController;
