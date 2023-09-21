import MediaList, { MediaListItemType } from "@/components/MediaList";
import getFullTMDBImgPath from "@/shared/helpers/getFullTMDBImgPath";
import { useAppSelector } from "@/stores";
import styled from "styled-components";

interface MediaListBlockProps {}

const MediaListBlock = (props: MediaListBlockProps) => {
  const movies = useAppSelector((s) => s.home.movies);
  const items: MediaListItemType[] = movies.map((el) => ({
    backgroundUrl: getFullTMDBImgPath(el.backdrop_path, 'w500'),
    id: `${el.id}`,
    title: el.title,
  }));
  return (
    <Wrapper>
      <MediaList items={items} title="Recently" />;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export default MediaListBlock;
