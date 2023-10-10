"use client";

import { createStore } from "@/stores";
import { AppState } from "@/stores/types";
import { DeepPartial } from "@reduxjs/toolkit";
import { PropsWithChildren, useMemo } from "react";
import { Provider } from "react-redux";
import { BreakpointProvider } from "./breakpoint";

interface AppProvidersProps extends PropsWithChildren {
  initialState?: DeepPartial<AppState>;
}

export const AppProviders = ({ initialState, children }: AppProvidersProps) => {
  const store = useMemo(() => createStore({ initialState }), []);
  return (
    <Provider store={store}>
      <BreakpointProvider>{children}</BreakpointProvider>
    </Provider>
  );
};
