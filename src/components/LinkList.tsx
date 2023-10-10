import Link from "next/link";
import { Children, PropsWithChildren } from "react";

interface LinkListProps extends PropsWithChildren {
  className?: string;
  items: { href: string }[];
}

const LinkList = (props: LinkListProps) => {
  return (
    <div className={`${props.className ?? ""} `}>
      {Children.map(props.children, (el, i) => (
        <Link key={props.items[i].href} href={props.items[i].href}>{el}</Link>
      ))}
    </div>
  );
};

export default LinkList;
