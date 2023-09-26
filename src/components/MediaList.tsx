import PlayBg from "@/shared/assets/play_bg.svg";
import { Media } from "@/stores/types";
import Image from "next/image";
import styled from "styled-components";
import { register } from "swiper/element/bundle";
import { SwiperProps, SwiperSlideProps } from "swiper/react";

register();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": SwiperProps;
      "swiper-slide": SwiperSlideProps;
    }
  }
}

export type MediaListItemType = {
  title: string;
  id: string;
  backgroundUrl: string;
};

interface MediaListProps {
  className?: string;
  title: string;
  items: Media[];
  onItemClick?: (el: Media) => void;
}

const MediaList = (props: MediaListProps) => {
  return (
    <Wrapper className={props.className}>
      <Title>{props.title}</Title>
      <swiper-container space-between={20} slides-per-view={7}>
        {props.items.map((el) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <swiper-slide lazy>
              <Item onClick={() => props.onItemClick?.(el)} key={el.id}>
                <Image
                  className="object-contain"
                  fill
                  loading="lazy"
                  src={el.poster_path || el.backdrop_path || ""}
                  alt=""
                />
                <PlayBg />
                <ItemTitle>{el.title}</ItemTitle>
              </Item>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 2rem;
`;

const Title = styled.h2`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.015rem;
  margin: 0 1rem 1rem;
`;

const PlayBgIcon = styled(PlayBg)`
  position: absolute;
  opacity: 0;
  color: red;
  z-index: 10;
`;

const ItemTitle = styled.h3`
  opacity: 0;
  transition: opacity 0.3s;
  color: white;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.0125rem;
  z-index: 10;
`;

const Item = styled.li`
  border-radius: 1.1875rem;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 2/3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 42px 0px rgba(22, 22, 22, 0.16);

  &::after {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    content: "";
    position: absolute;
    margin: auto;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    ${ItemTitle}, ${PlayBgIcon} {
      opacity: 1;
    }
  }
`;

export default MediaList;
