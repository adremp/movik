import text from "@/shared/styles/text";
import { cx } from "class-variance-authority";
import { PropsWithChildren } from "react";
import AppSwiper from "./Swiper";

interface MediaListProps extends PropsWithChildren {
  className?: string;
  title: string;
}

const MediaList = (props: MediaListProps) => {
  return (
    <div className={cx("text-text-primary", props.className)}>
      <h1 className={text({ size: "16" }, "ml-13 ml-93")}>{props.title}</h1>
      <AppSwiper
        breakpointSlides={{ xs: 3, md: 4, lg: 7 }}
        className="mt-15"
        containerProps={{
          direction: "horizontal",
          "space-between": 30,
          "slides-offset-before": 80,
        }}
        sliderProps={{ lazy: true }}
      >
        {props.children}
        {/* {props.items.map((el) => (
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
        ))} */}
      </AppSwiper>
    </div>
  );
};

export default MediaList;
