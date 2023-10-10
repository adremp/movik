import { VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export default <P extends (props: Record<string, any>) => string>(cva: P) =>
  (props: VariantProps<P>, ...classNames: any[]) =>
    twMerge(cva(props), ...classNames);
