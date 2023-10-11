import * as motion from "@/components/motion/components";
import effect from "@/shared/styles/effect";
import { ImageProps } from "next/image";

interface MediaBackgroundImageProps
  extends Omit<ImageProps, "fill" | "alt" | "className"> {}

const MediaBackgroundImage = (props: MediaBackgroundImageProps) => {
  return (
    <motion.div>
      {/* @ts-ignore */}
      <motion.MotionImage
        transition={{ duration: 1 }}
        key={props.src.toString()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        {...props}
        className={
          "absolute top-0 object-cover left-0 pointer-events-none -z-10 select-none"
        }
        alt=""
        priority
        fill
      />
      {/* <Image
        {...props}
        className={
          "absolute top-0 object-cover left-0 pointer-events-none -z-10 select-none"
        }
        alt=""
				priority
        fill
      /> */}
      <span className={effect({ bg: "darkOverlayLeft" })}></span>
    </motion.div>
  );
};

export default MediaBackgroundImage;
