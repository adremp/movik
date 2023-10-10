import { cva } from "class-variance-authority";
import createVariants from "../utils/createVariants";

const style = cva("", {
  variants: {
    button: {
      opacity: [
        "opacity-90 hover:shadow-2xl transition-opacity hover:opacity-95 active:opacity-100",
      ],
    },
  },
});

export default createVariants(style);
