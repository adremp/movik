"use client"

import { useEffect, useLayoutEffect } from "react";

export default typeof window !== undefined ? useLayoutEffect : useEffect