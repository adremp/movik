import { Video } from "@/shared/api/types";
import { urls } from "@/shared/const";
import AppSwiper from "./Swiper";
import VideoCard from "./VideoCard";

interface MediaVideosProps {
  videos: Video[];
}

const MediaVideos = (props: MediaVideosProps) => {
	const typesList = props.videos.map((el) => ({'data-hash': el.type.toLowerCase()}))
  return (
    <AppSwiper
      className="h-full w-full flex"
      breakpointSlides={{ xs: 2, md: 3 }}
      containerProps={{
        direction: "vertical",
        "space-between": 30,
        mousewheel: true,
				"hash-navigation": {replaceState: true}
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
