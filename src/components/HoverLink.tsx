"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps, useRef } from "react";

interface HoverLinkProps extends ComponentProps<typeof Link> {
  hoverHref: string;
  delayMs: number;
  preload?: boolean;
}

const HoverLink = ({preload, delayMs, hoverHref, ...props}: HoverLinkProps) => {
  const router = useRouter();

  const timerRef = useRef<NodeJS.Timeout>();

  const onEnter = () => {
    if (preload) {
      router.prefetch(hoverHref);
    }
    timerRef.current = setTimeout(() => {
      router.push(hoverHref);
      timerRef.current = undefined;
    }, delayMs);
  };

  const onLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  };

  return (
    <Link
      {...props}
      onPointerLeave={onLeave}
      onPointerCancel={onLeave}
      onPointerEnter={onEnter}
    ></Link>
  );
};

export default HoverLink;
