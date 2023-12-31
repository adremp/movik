"use client";

import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";

export default (media: string) => {
  const Context = createContext(false);

  const get = () => window.matchMedia(media).matches;
  const subscribe = (cb: () => void) => {
		const match = window.matchMedia(media)
    match.addEventListener("change", cb);
    return () => match.removeEventListener("change", cb);
  };

  const Provider = (props: PropsWithChildren) => {
    const match = useSyncExternalStore(subscribe, get, () => true);

    return <Context.Provider value={match}>{props.children}</Context.Provider>;
  };

  const useMedia = () => useContext(Context);

  const When = (props: { true: ReactNode; false: ReactNode }): JSX.Element => {
    const match = useMedia();
    return <>{match ? props.true : props.false}</>;
  };

  return [Provider, useMedia, When] as const;
};
