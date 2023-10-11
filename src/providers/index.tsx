"use client";

import { createStore } from "@/stores";
import { AppState } from "@/stores/types";
import { DeepPartial } from "@reduxjs/toolkit";
import { LazyMotion, domAnimation } from "framer-motion";
import { PropsWithChildren, useMemo } from "react";
import { Provider } from "react-redux";
import { BreakpointProvider } from "./breakpoint";
import createMatchMediaProvider from "@/shared/utils/createMatchMediaProvider";

export const [HoverProvider, useMatchHover, WhenMediaHover] = createMatchMediaProvider('{hover: hover}')

interface AppProvidersProps extends PropsWithChildren {
  initialState?: DeepPartial<AppState>;
}

export const AppProviders = ({ initialState, children }: AppProvidersProps) => {
  const store = useMemo(() => createStore({ initialState }), []);
  return (
    <Provider store={store}>
      <BreakpointProvider>
        <HoverProvider>
          <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </HoverProvider>
      </BreakpointProvider>
    </Provider>
  );
};
