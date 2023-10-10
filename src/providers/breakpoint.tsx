"use client";

import useIsomorphicLayoutEffect from "@/shared/hooks/useIsomorphicLayoutEffect";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ConfigScreens, screenEntries } from "../../config";

export const Context = createContext<keyof ConfigScreens>("xs");

const getBreakpoint = () => {
  for (const [bp, size] of screenEntries) {
    const match = window.matchMedia(`(min-width: ${size})`);
    if (match.matches) {
      return [bp, match] as [keyof ConfigScreens, MediaQueryList];
    }
  }
  throw new Error("breakpoint not found");
};

export const BreakpointProvider = ({ children }: PropsWithChildren) => {
  const [bp, setBp] = useState<keyof ConfigScreens>("xs");

  useIsomorphicLayoutEffect(() => {
    const onChange = () => {
      const [bp, match] = getBreakpoint();
      setBp(bp);
      match.addEventListener("change", onChange);
    };
    onChange();
  }, []);

  return <Context.Provider value={bp}>{children}</Context.Provider>;
};

export const useBreakpoint = () => useContext(Context);
