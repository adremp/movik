"use client";

import { useAppSelector } from "@/stores";
import HeaderNav from "@/widgets/HeaderNav";
import MediaListBlock from "@/widgets/MediaListBlock";
import Image from "next/image";
import Description from "./MediaDescription";
import { BackgroundFilter } from "@/components/common";

export default function Home() {
  const bgImg = useAppSelector((s) => s.home.backgroundUrl);
  return (
    <>
      <Image className="-z-10 object-cover" src={bgImg} alt="" fill />
      <BackgroundFilter />
      <HeaderNav />
      <main>
        <Description />
        <MediaListBlock />
      </main>
    </> 	
  );
}
