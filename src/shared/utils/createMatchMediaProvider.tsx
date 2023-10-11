"use client"

import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";

export default (media: string) => {
  const Context = createContext(false);

  const mediaQuery = window.matchMedia(media);
  const get = () => mediaQuery.matches;
  const subscribe = (cb: () => void) => {
    mediaQuery.addEventListener("change", cb);
    return () => mediaQuery.removeEventListener("change", cb);
  };

  const Provider = (props: PropsWithChildren) => {
    const match = useSyncExternalStore(subscribe, get);

    return <Context.Provider value={match}>{props.children}</Context.Provider>;
  };

  const useMedia = () => useContext(Context);

  const When = (props: { true: ReactNode; false: ReactNode }) => {
    const match = useMedia();
    return match ? props.true : props.false;
  };

  return [Provider, useMedia, When] as const;
};
