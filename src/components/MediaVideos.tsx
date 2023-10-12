import AppSwiper, { SwiperIFrame } from "./Swiper";

interface MediaVideosProps {
  urls: string[];
}

const MediaVideos = (props: MediaVideosProps) => {
  return (
    <AppSwiper
      className="flex overflow-hidden w-full"
      breakpointSlides={{ xs: 2, md: 3 }}
      containerProps={{
        direction: "vertical",
        "space-between": 10,
      }}
      sliderProps={{ lazy: true }}
    >
      {props.urls.map((el) => (
        <SwiperIFrame
          allowFullScreen
          loading="lazy"
          width={"400px"}
          src={el}
          key={el}
          className="aspect-[16/9] pointer-events-none"
        />
      ))}
    </AppSwiper>
  );
};

export default MediaVideos;
