import PlayIcon from "@/shared/assets/play.svg";

import { PrimaryButton } from "@/components/button";

interface WatchMediaButtonProps {
  className?: string;
}

const WatchMediaButton = (props: WatchMediaButtonProps) => {
  return (
    <PrimaryButton className={props.className}>
      <PlayIcon />
      Watch
    </PrimaryButton>
  );
};

export default WatchMediaButton;
