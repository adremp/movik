"use client"

import { ReactNode } from "react";

interface Props<A extends any[], H extends (...args: A) => any> {
  children: (params: ReturnType<H>) => ReactNode;
  args?: A;
  hook: H;
}

export default <A extends any[], H extends (...args: any[]) => any>({
  hook: useHook,
  children,
}: Props<A, H>) => {
  const res = useHook();

	return children(res);
};
