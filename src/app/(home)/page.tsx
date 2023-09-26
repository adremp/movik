"use client";

import { BackgroundFilter, BackgroundImage, ScrollableContainer } from "@/components/common";
import { useAppSelector } from "@/stores";
import HeaderNav from "@/widgets/HeaderNav";
import MediaListBlock from "@/widgets/MediaListBlock";
import styled from "styled-components";
import Description from "./Description";

export const Home = () => {
  const bgUrl = useAppSelector((s) => s.home.mainMedia?.backdrop_path);
  return (
    <>
      {bgUrl && <BackgroundImage src={bgUrl} alt="" />}
      <BackgroundFilter />
      <HeaderNav />
      <ScrollableContainer>
        <Description />
        <MediaListBlock />
      </ScrollableContainer>
    </>
  );
};

export default Home;
