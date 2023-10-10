import { Media } from "@/shared/api/types";
import routes from "@/shared/const/routes";
import Link from "next/link";
import { ReactNode } from "react";

interface MediaLinkProps {
  className?: string;
  mediaId: number;
  type: Media["type"];
  extraUrl?: string;
  children?: ReactNode;
}

const MediaLink = (props: MediaLinkProps) => {
  const href = routes[props.type](props.mediaId) + (props.extraUrl || "");

  return (
    <Link href={href} className={props.className}>
      {props.children}
    </Link>
  );
};

export default MediaLink;
