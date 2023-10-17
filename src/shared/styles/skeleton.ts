import { cva } from "class-variance-authority";
import createVariants from "../utils/createVariants";

const style = cva("", {
  variants: {
    variant: {
      primary: ["w-full h-full animate-pulse bg-primary/10 rounded-24"],
    },
  },
});

export default createVariants(style);
