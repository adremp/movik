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

{
  /* {props.urls.map((el, i) => (
          <SwiperSlide lazy key={i}>
            <VideoFrame loading="lazy" src={el} allowFullScreen></VideoFrame>
          </SwiperSlide>
        ))} */
}

{
  /* <swiper-container direction="vertical" allow-touch-move space-between={30} slides-per-view={"auto"}>
        {props.urls.map((el) => (
          // @ts-ignore
          <swiper-slide lazy key={el}>
            <VideoFrame
              loading="lazy"
              src={el}
              allowFullScreen
            ></VideoFrame>
          </swiper-slide>
        ))}
      </swiper-container> */
}

// const Container = styled.div`
//   overflow-y: auto;
//   height: 100%;
//   width: min-content;
// `;

// const VideoFrame = styled.iframe`
//   width: 28rem;
//   height: 28rem;
//   border-radius: 1.1875rem;
//   background: linear-gradient(
//       180deg,
//       rgba(22, 22, 22, 0.11) 58.22%,
//       rgba(33, 33, 33, 0.71) 100%
//     ),
//     url(<path-to-image>), lightgray 50% / cover no-repeat, url(<path-to-image>),
//     lightgray 50% / cover no-repeat;
//   box-shadow: 0px 0px 42px 0px rgba(22, 22, 22, 0.16);
// `;

export default MediaVideos;
