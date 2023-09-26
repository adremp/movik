import MediaDescription from "@/components/MediaDescription";
import AddListButton from "@/features/AddListButton";
import WatchMediaButton from "@/features/WatchMediaButton";
import WatchTrailerButton from "@/features/WatchTrailerButton";
import { useAppSelector } from "@/stores";
import styled from "styled-components";

interface MediaDescriptionProps {
  className?: string;
}

const Description = (props: MediaDescriptionProps) => {
  const mainMedia = useAppSelector((s) => s.mediaDetails.media);

  if (!mainMedia) return <>ОШИБКА ЗАГРУЗКИ</>;

  return (
    <MediaDescription
      title={mainMedia.title}
      description={mainMedia.overview}
    />
  );
};

export default Description;
