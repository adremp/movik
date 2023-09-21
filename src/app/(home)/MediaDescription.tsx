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

	const state = useAppSelector((s) => s.home)

  const endBlock = (
    <ActionBlock>
      <WatchMediaButton className="mr-auto" />
      <WatchTrailerButton />
      <AddListButton />
    </ActionBlock>
  );

  return (
    <MediaDescription
      title={state.title}
      description={state.description}
      endChild={endBlock}
    />
  );
};

const ActionBlock = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export default Description;
