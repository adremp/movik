import PlayIcon from "@/shared/assets/play.svg";

import { PrimaryButton } from "@/components/button";
import { useAppSelector } from "@/stores";
import { useMediaDetailsActions } from "@/stores/mediaDetails";
import { mediaTypeNavigation } from "@/widgets/MediaListBlock";
import { useRouter } from "next/navigation";

interface WatchMediaButtonProps {
  className?: string;
}

const WatchMediaButton = (props: WatchMediaButtonProps) => {
  const mainMedia = useAppSelector((s) => s.home.mainMedia);
  const navigate = useRouter();
  const { set } = useMediaDetailsActions();

  const onClick = () => {
    if (!mainMedia) return console.warn("mainMedia is undefined");
    set({ media: mainMedia });
    navigate.push(mediaTypeNavigation[mainMedia.type](mainMedia.id));
  };

  return (
    <PrimaryButton onClick={onClick} className={props.className}>
      <PlayIcon />
      Watch
    </PrimaryButton>
  );
};

export default WatchMediaButton;
