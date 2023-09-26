"use client";

import MediaVideos from "@/components/MediaVideos";
import {
  BackgroundFilter,
  BackgroundImage,
  ScrollableContainer,
} from "@/components/common";
import { urls } from "@/shared/const";
import { useAppSelector } from "@/stores";
import { useMediaDetailsActions } from "@/stores/mediaDetails";
import { shallowEqual } from "react-redux";
import Description from "./Description";
import { useEffect } from "react";
import { useParams } from "next/navigation";

const Movie = () => {
  const { fetchVideos } = useMediaDetailsActions();
  const store = useAppSelector(
    (s) => ({
      bgUrl: s.mediaDetails.media?.backdrop_path,
      videos: s.mediaDetails.videos,
    }),
    shallowEqual
  );
	const {id} = useParams<{id: string}>()

  const videoUrls = store.videos.map((v) => urls.youtubeVideo(v.key));

  useEffect(() => {
    fetchVideos(+id);
  }, []);

  return (
    <>
      {store.bgUrl && <BackgroundImage src={store.bgUrl} alt="" />}
      <BackgroundFilter />
      <ScrollableContainer>
        <Description />
        <MediaVideos urls={videoUrls} />
      </ScrollableContainer>
    </>
  );
};

export default Movie;
