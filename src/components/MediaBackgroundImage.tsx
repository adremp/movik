import effect from "@/shared/styles/effect";
import Image, { ImageProps } from "next/image";

interface MediaBackgroundImageProps
  extends Omit<ImageProps, "fill" | "alt" | "className"> {}

const MediaBackgroundImage = (props: MediaBackgroundImageProps) => {
  return (
    <>
      <Image
        {...props}
        className={
          "absolute top-0 object-cover left-0 pointer-events-none -z-10 select-none"
        }
        alt=""
        fill
      />
      <span className={effect({ bg: "darkOverlayLeft" })}></span>
    </>
  );
};

export default MediaBackgroundImage;
