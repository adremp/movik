import MediaList from "@/components/MediaList";
import routes from "@/shared/const/routes";
import { useAppSelector } from "@/stores";
import { useMediaDetailsActions } from "@/stores/mediaDetails";
import { Media } from "@/stores/types";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export const mediaTypeNavigation: Record<
  Media["type"],
  (id: number) => string
> = {
  movie: routes.movie,
  show: routes.show,
};

interface MediaListBlockProps {}

const MediaListBlock = (props: MediaListBlockProps) => {
  const mediaData = useAppSelector((s) => s.home.mediaData);
  const { set } = useMediaDetailsActions();
  const navigation = useRouter();

  const onMediaClick = (media: Media) => {
    set({ media });
    const url = mediaTypeNavigation[media.type](media.id);
    navigation.push(url);
  };

  if (!mediaData) return null;

  return (
    <Wrapper>
      {mediaData.map((el) => (
        <MediaList
          onItemClick={onMediaClick}
          key={el.title}
          items={el.data}
          title={el.title}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2rem;
`;

export default MediaListBlock;
