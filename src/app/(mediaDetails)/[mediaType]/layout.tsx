
import { PropsWithChildren } from "react";

export type MediaTypeParams = typeof mediaTypeParams[number]
export const mediaTypeParams = ["show", "movie"] as const;

export const generateStaticParams = () =>
  mediaTypeParams.map((el) => ({ mediaType: [el] }));

const Layout = (props: PropsWithChildren) => {
  return props.children
};

export default Layout;
