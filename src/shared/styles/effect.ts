import createVariants from "@/shared/utils/createVariants";
import { cva } from "class-variance-authority";

const style = cva("", {
  variants: {
    bg: {
      darkOverlayOnHover: ["hovered:hover:after:bg-fade"],
      darkOverlayLeft: ["after:bg-fadeLeft"],
      darkOverlay: ["after:bg-fade"],
    },
    cover: {
      fullAbsolute: [
        "after:absolute after:left-0 after:w-full after:h-full after:top-0 after:z-[-1]",
      ],
    },
    hover: {
      opacity: [
        "hovered:group-hover:opacity-100 hovered:opacity-0 transition-opacity",
      ],
    },
  },
});

export default createVariants(style);
