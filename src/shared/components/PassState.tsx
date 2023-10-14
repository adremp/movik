"use client"

import { HomeActions } from "@/stores/home";
import { AppState } from "@/stores/types";
import { DeepPartial } from "@reduxjs/toolkit";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";

const actions = {
  home: HomeActions,
}

const PassState = ({
  children,
  ...props
}: PropsWithChildren<DeepPartial<AppState>>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    for (const key in props) {
			// @ts-ignore
      if (actions[key]) {
        // @ts-ignore
        dispatch(actions[key].set(props[key]));
      }
    }
  }, []);

  return children;
};

export default PassState;
