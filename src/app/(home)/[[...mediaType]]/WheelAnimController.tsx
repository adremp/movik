"use client";

import * as motion from "@/components/motion/components";
import { useMatchHover } from "@/providers";
import { useAppSelector } from "@/stores";
import { useHomeActions } from "@/stores/home";
import { PropsWithChildren, useRef } from "react";

interface ScrollProps extends PropsWithChildren {}

const ScrollController = (props: ScrollProps) => {
  const animViewType = useAppSelector((s) => s.home.animViewType);
  const scrollTop = useAppSelector((s) => s.home.mediaScrollTop);
  const { set, resetView } = useHomeActions();
  const matchHover = useMatchHover();

  const holdedOffsetY = useRef(0);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0 && animViewType === "default") {
      set({ animViewType: "expanded" });
    } else if (e.deltaY < 0 && scrollTop === 0) {
      resetView();
    }
  };

  const onDown = (e: React.PointerEvent) => {
    holdedOffsetY.current = e.screenY;
  };
  const onMove = (e: React.PointerEvent) => {
    if (e.screenY < holdedOffsetY.current - 60) {
      set({ animViewType: "expanded" });
    } else if (scrollTop < 10 && e.screenY > holdedOffsetY.current + 60) {
      set({ animViewType: "default" });
    }
  };

  const withPointer = scrollTop < 10 && !matchHover;

  return (
    <motion.div
      className="w-full relative h-full touch-none"
      onWheel={scrollTop < 10 ? onWheel : undefined}
      onPointerDown={withPointer ? onDown : undefined}
      onPointerMove={withPointer ? onMove : undefined}
      animate={animViewType}
    >
      {props.children}
    </motion.div>
  );
};

export default ScrollController;
