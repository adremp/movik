import { cva } from "class-variance-authority";
import createVariants from "../utils/createVariants";

const style = cva("", {
  variants: {
    button: {
      opacity: [
        "opacity-90 transition-opacity hover:opacity-95 active:opacity-100",
      ],
    },
		link: {
			primary: ['hovered:hover:underline transition']
		}
  },
});

export default createVariants(style);
