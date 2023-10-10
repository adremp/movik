import createVariants from "@/shared/utils/createVariants";
import { cva } from "class-variance-authority";

const style = cva(
  "after:absolute after:top-0 after:z-[-1] after:left-0 after:w-full after:h-full",
  {
    variants: {
      bg: {
        darkOverlayLeft: ["after:bg-fadeLeft"],
        darkOverlay: ["after:bg-fade"],
      },
    },
  }
);

export default createVariants(style);
