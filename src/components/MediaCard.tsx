import PlayBgIcon from "@/shared/assets/play_bg.svg";
import effect from "@/shared/styles/effect";
import text from "@/shared/styles/text";
import Image from "next/image";
import HoverLink from "./HoverLink";
import { WhenMediaHover } from "@/providers";
import Link from "next/link";

interface MediaCardProps {
  className?: string;
  image: string;
  title: string;
  href: string;
  hoverHref: string;
}

const MediaCard = (props: MediaCardProps) => {
  const className = effect(
    { bg: "darkOverlay", cover: "fullAbsolute" },
    "rounded-19 flex overflow-hidden items-center justify-center w-full group aspect-[2/3] relative",
    "[&:not(:hover)]:after:opacity-0 after:transition-opacity"
  );
  const children = (
    <>
      <Image
        className="object-contain"
        fill
        loading="lazy"
        src={props.image}
        alt=""
      />
      <PlayBgIcon className="transition-opacity z-10 opacity-0 group-hover:opacity-100" />
      <h2
        className={text(
          { size: "20-600" },
          "opacity-0 absolute bottom-16 z-10 left-16 transition-opacity"
        )}
      >
        {props.title}
      </h2>
    </>
  );

  return (
    <HoverLink
      delayMs={0}
      preload
      className={className}
      hoverHref={props.hoverHref}
      href={props.href}
    >
      {children}
    </HoverLink>
    // <WhenMediaHover
    //   true={
    //     <HoverLink
    //       delayMs={2000}
    //       preload
    //       className={className}
    //       hoverHref={props.hoverHref}
    //       href={props.href}
    //     >
    //       {children}
    //     </HoverLink>
    //   }
    //   false={
    //     <Link href={props.href} className={className}>
    //       {children}
    //     </Link>
    //   }
    // />
  );
};

export default MediaCard;
