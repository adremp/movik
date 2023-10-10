import PlayBgIcon from "@/shared/assets/play_bg.svg";
import effect from "@/shared/styles/effect";
import text from "@/shared/styles/text";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import AppSwiper from "./Swiper";
import { Media } from "@/shared/api/types";

interface MediaListProps {
  className?: string;
  title: string;
  items: Media[];
}

const MediaList = (props: MediaListProps) => {
  return (
    <div className={cx("text-text-primary", props.className)}>
      <h1 className={text({ size: "16" }, "ml-13")}>{props.title}</h1>
      <AppSwiper
        breakpointSlides={{ xs: 1, md: 3, lg: 7 }}
        className="mt-15"
        containerProps={{
          direction: "horizontal",
          "space-between": 30,
        }}
        sliderProps={{ lazy: true }}
      >
        {props.items.map((el) => (
          <Link
            key={el.id}
            href={el.href}
            className={effect(
              { bg: "darkOverlay" },
              "rounded-19 flex overflow-hidden items-center justify-center w-full group aspect-[2/3] relative",
              "[&:not(:hover)]:after:opacity-0 after:transition-opacity"
            )}
          >
            <Image
              className="object-contain"
              fill
              loading="lazy"
              src={el.poster_path || el.backdrop_path || ""}
              alt=""
            />
            <PlayBgIcon className="transition-opacity z-10 opacity-0 group-hover:opacity-100" />
            <h2
              className={text(
                { size: "20-600" },
                "opacity-0 absolute bottom-16 z-10 left-16 transition-opacity"
              )}
            >
              {el.title}
            </h2>
          </Link>
        ))}
      </AppSwiper>
    </div>
  );
};

export default MediaList;
