import { ConfigScreens, screenEntries } from "../../../config";

export default <R,>(
  currentBreakpoint: keyof ConfigScreens,
  breakpoints: Partial<Record<keyof ConfigScreens, R>>
	// @ts-ignore
): R => {
  const currBpIdx = screenEntries.findIndex(([key]) => {
    return key === currentBreakpoint;
  });

  for (
    let i = currBpIdx;
    i < screenEntries.length;
    i++
  ) {
    const bp = breakpoints?.[screenEntries[i][0]];
    if (bp !== undefined) return bp;
  }
};
