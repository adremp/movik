import { cva } from "class-variance-authority";
import createVariants from "../utils/createVariants";

const style = cva("px-40 md:px-80", {
  variants: {
    bg: {
      darkOverlayLeft: ["after:bg-fadeLeft"],
      darkOverlay: ["after:bg-fade"],
    },
  },
});

export default createVariants(style);
