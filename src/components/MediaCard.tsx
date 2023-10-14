import PlayBgIcon from "@/shared/assets/play_bg.svg";
import effect from "@/shared/styles/effect";
import text from "@/shared/styles/text";
import Image from "next/image";

interface MediaCardProps {
  className?: string;
  image: string;
  title: string;
}

const MediaCard = (props: MediaCardProps) => {
  const className = effect(
    { bg: "darkOverlay", cover: "fullAbsolute" },
    "rounded-19 flex overflow-hidden items-center justify-center w-full group aspect-[2/3] relative",
    "[&:not(:hover)]:after:opacity-0 after:transition-opacity",
    props.className
  );

  return (
    <div className={className}>
      <Image
        className="object-contain"
        fill
        loading="lazy"
        src={props.image}
        alt=""
      />
      <PlayBgIcon className="transition-opacity z-10 opacity-0 group-hover:opacity-100" />
      <h2
        className={text(
          { size: "20-600" },
          "opacity-0 absolute bottom-16 z-10 left-16 transition-opacity"
        )}
      >
        {props.title}
      </h2>
    </div>
  );
};
export default MediaCard;
