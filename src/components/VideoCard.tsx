"use client";

import * as motion from "@/components/motion/components";
import PlayIcon from "@/shared/assets/play_bg.svg";
import effect from "@/shared/styles/effect";
import skeleton from "@/shared/styles/skeleton";
import text from "@/shared/styles/text";
import Image from "next/image";
import { useState } from "react";

interface VideoCardProps {
  className?: string;
  src: string;
  previewSrc: string;
  title: string;
  isActive?: boolean;
}

const VideoCard = (props: VideoCardProps) => {
  const [isActive, setActive] = useState(props.isActive ?? false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={
        "aspect-[16/9] h-full group flex relative overflow-hidden rounded-12"
      }
    >
      <div className={skeleton({ variant: "primary" }, "-z-10 absolute")}></div>
      {isActive ? (
        <iframe
          width={"100%"}
          height={"100%"}
          allowFullScreen
          src={props.src}
          allow="autoplay"
        />
      ) : (
        <>
          <Image
            loading="lazy"
            fill
            onClick={() => setActive(true)}
            alt=""
            src={props.previewSrc}
          />
          <p
            className={text(
              { size: "20-400" },
              "absolute bottom-15 left-15",
              effect({ hover: "opacity" })
            )}
          >
            {props.title}
          </p>
          <PlayIcon
            className={effect(
              { hover: "opacity" },
              "m-auto z-10 pointer-events-none"
            )}
          />
        </>
      )}
    </motion.div>
  );
};

export default VideoCard;
