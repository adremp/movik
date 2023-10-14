"use client";

import * as motion from "@/components/motion/components";
import { useAppSelector } from "@/stores";
import { useHomeActions } from "@/stores/home";
import { PropsWithChildren, useEffect } from "react";

interface ScrollProps extends PropsWithChildren {}

const ScrollController = (props: ScrollProps) => {
  const animViewType = useAppSelector((s) => s.home.animViewType);
  const scrollTop = useAppSelector((s) => s.home.mediaScrollTop);
  const { set } = useHomeActions();

  useEffect(() => {
    const onScroll = (e: WheelEvent) => {
      if (e.deltaY > 0 && animViewType === "default") {
        set({ animViewType: "expanded" });
      } else if (e.deltaY < 0 && scrollTop === 0) {
        set({
          animViewType: "default",
          fullViewParamType: undefined,
          fullViewMediaResponse: { page: 0, results: [], total_pages: 0 },
					fullViewErrorMessage: undefined,
					mediaScrollTop: 0,
					fullViewLoading: false
        });
      }
    };
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  }, [animViewType, scrollTop]);

  return (
    <motion.div className="w-full h-full" animate={animViewType}>
      {props.children}
    </motion.div>
  );
};

export default ScrollController;
