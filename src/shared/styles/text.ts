import { cva } from "class-variance-authority";
import createVariants from "../utils/createVariants";

const style = cva(["text-text-primary"], {
  variants: {
    size: {
      "40": ["text-40 uppercase font-staatliches tracking-[-1.4px]"],
      "100": [
        "text-100 select-none font-staatliches uppercase leading-[90%] tracking-[0.224rem]",
      ],
      "20-400": ["text-20 leading-[132%] tracking-[-0.2px]"],
      "20-500": ["text-20 font-500 tracking-[-0.2px]"],
      "22-400": ["text-22 font-400 uppercase tracking-[-0.33px]"],
      "24-500": ["text-24 font-500 tracking-[-0.24px]"],
      "20-600": ["text-20 font-600 leading-[132%] tracking-[-0.2px]"],
      "50-400": [
        "text-49 font-40 font-staatliches tracking-[-1.715px] uppercase",
      ],
      "16": ["text-16 font-600 leading-[0.24px]"],
      "18-500": ["text-18 font-500 tracking-[-0.18px]"],
      "18-700": ["text-18 font-700 leading-[131%] tracking-[-0.18px]"],
    },
  },
});

export default createVariants(style);
