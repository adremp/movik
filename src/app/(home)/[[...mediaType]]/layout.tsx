import * as motion from "@/components/motion/components";
import { AnimatePresence } from "@/components/motion/components";
import { ReactNode } from "react";
import ScrollController from "./WheelAnimController";

// TODO что то тут не так
export const generateStaticParams = () =>
  ["shows", "movies", ""].map((el) => ({ mediaType: [el] }));
export const dynamicParams = false;

interface LayoutProps {
  description: ReactNode;
  mediaList: ReactNode;
  nav: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <AnimatePresence>
      <ScrollController>
        <motion.main className="flex p-page max-h-full flex-col">
        {/* <motion.main className="flex p-page max-h-full flex-col"> */}
          {props.nav}
          {props.description}
          {props.mediaList}
        </motion.main>
      </ScrollController>
    </AnimatePresence>
  );
};

export default Layout;
