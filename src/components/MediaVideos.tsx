import styled from "styled-components";

interface MediaVideosProps {
  urls: string[];
}

const MediaVideos = (props: MediaVideosProps) => {
  return (
    <swiper-container
			direction="vertical"
      effect="coverflow"
      grab-cursor="true"
			spaceBetween={20}
      centered-slides="true"
      slides-per-view="auto"
      coverflow-effect-rotate="50"
      coverflow-effect-stretch="0"
      coverflow-effect-depth="100"
      coverflow-effect-modifier="1"
      coverflow-effect-slide-shadows="true"
    >
      {props.urls.map((el) => (
        // @ts-ignore
        <swiper-slide lazy key={el}>
          <VideoFrame width={"100%"} height={"100%"} loading="lazy" src={el} allowFullScreen></VideoFrame>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

const VideoFrame = styled.iframe`
  width: 28rem;
  height: 28rem;
  border-radius: 1.1875rem;
  background: linear-gradient(
      180deg,
      rgba(22, 22, 22, 0.11) 58.22%,
      rgba(33, 33, 33, 0.71) 100%
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat, url(<path-to-image>),
    lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 42px 0px rgba(22, 22, 22, 0.16);
`;

export default MediaVideos;
