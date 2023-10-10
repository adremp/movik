"use client";

import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export default <A extends ActionCreatorsMapObject>(actions: A): (() => A) =>
  () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), []);
  };
