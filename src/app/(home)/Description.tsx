import MediaDescription from "@/components/MediaDescription";
import AddListButton from "@/features/AddListButton";
import WatchMediaButton from "@/features/WatchMediaButton";
import WatchTrailerButton from "@/features/WatchTrailerButton";
import { useAppSelector } from "@/stores";
import styled from "styled-components";

interface DescriptionProps {
  className?: string;
}

const Description = (props: DescriptionProps) => {
	const mainMedia = useAppSelector((s) => s.home.mainMedia)

	if (!mainMedia) return <>ОШИБКА ЗАГРУЗКИ</>

  const endBlock = (
    <ActionBlock>
      <WatchMediaButton className="mr-auto" />
      <WatchTrailerButton />
      <AddListButton />
    </ActionBlock>
  );

  return (
    <MediaDescription
      title={mainMedia.title}
      description={mainMedia.overview}
      endChild={endBlock}
    />
  );
};

const ActionBlock = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export default Description;
