import { cva } from 'class-variance-authority';
import createVariants from '../utils/createVariants';
import text from './text';

const style = cva("inline-block", {
  variants: {
    variant: {
      primary: [
        text({ size: "18-500" }),
        "px-7 rounded-4 py-3 bg-[rgba(255, 255, 255, 0.31)]",
      ],
    },
  },
});

export default createVariants(style)