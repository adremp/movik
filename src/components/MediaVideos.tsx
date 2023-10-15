import { Video } from "@/shared/api/types";
import { urls } from "@/shared/const";
import { cx } from "class-variance-authority";
import AppSwiper from "./Swiper";
import VideoCard from "./VideoCard";

interface MediaVideosProps {
  videos: Video[];
  className?: string;
}

const MediaVideos = (props: MediaVideosProps) => {
  const typesList = props.videos.map((el) => ({
    "data-hash": el.type.toLowerCase(),
  }));
  return (
    <AppSwiper
      containerPropsBreakpoints={{
        "slides-per-view": { xs: 1, sm: 2, lg: 3 },
        direction: { xs: "horizontal", lg: "vertical" },
      }}
      className={cx("h-full w-full flex", props.className)}
      containerProps={{
        "space-between": 30,
        mousewheel: true,
        "hash-navigation": { replaceState: true },
      }}
      sliderPropsList={typesList}
      sliderProps={{ lazy: true }}
    >
      {props.videos.map((el, i) => (
        <VideoCard
          title={el.type}
          key={el.key}
          previewSrc={urls.youtubePreview(el.key)}
          src={urls.youtubeVideo(el.key)}
        />
      ))}
    </AppSwiper>
  );
};

export default MediaVideos;
