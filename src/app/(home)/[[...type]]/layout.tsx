import { ReactNode } from "react";

interface LayoutProps {
  description: ReactNode;
  mediaList: ReactNode;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <main className="p-page">
      {props.children}
      {props.description}
      {props.mediaList}
    </main>
  );
};

export default Layout;
