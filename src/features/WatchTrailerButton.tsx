import { SecondaryButton } from "@/components/button";
import PlayIcon from "@/shared/assets/play.svg";

interface WatchTrailerButtonProps {
  className?: string;
}

const WatchTrailerButton = (props: WatchTrailerButtonProps) => {
  return (
    <SecondaryButton className={props.className}>
      <PlayIcon />
      Trailer
    </SecondaryButton>
  );
};

export default WatchTrailerButton;
