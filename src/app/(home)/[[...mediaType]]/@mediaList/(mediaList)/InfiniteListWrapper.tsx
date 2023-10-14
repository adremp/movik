"use client";

import { useAppSelector } from "@/stores";
import { PropsWithChildren } from "react";
import MediaInfiniteList from "./MediaInfiniteList";

const InfiniteListWrapper = (props: PropsWithChildren) => {
  const paramType = useAppSelector((s) => s.home.fullViewParamType);

  return paramType ? (
    <MediaInfiniteList paramType={paramType} page={2} />
  ) : (
    props.children
  );
};

export default InfiniteListWrapper;
