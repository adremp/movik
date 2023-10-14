import text from "@/shared/styles/text";
import { cx } from "class-variance-authority";
import { PropsWithChildren, ReactNode } from "react";
import AppSwiper from "./Swiper";

interface MediaListProps extends PropsWithChildren {
  className?: string;
  title: string;
  extraTitleChild?: ReactNode;
}

const MediaList = (props: MediaListProps) => {
  return (
    <div className={cx("text-text-primary", props.className)}>
      <div className="flex gap-13 items-center">
        <h1 className={text({ size: "16" }, "ml-93")}>{props.title}</h1>
        {props.extraTitleChild}
      </div>
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
      </AppSwiper>
    </div>
  );
};

export default MediaList;
