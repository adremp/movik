import { ConfigScreens, screenEntries } from "../../../config";

export default (
  currentBreakpoint: keyof ConfigScreens,
  breakpoints: Partial<Record<keyof ConfigScreens, any>>
) => {
  const currBpIdx = screenEntries.findIndex(([key]) => {
    return key === currentBreakpoint;
  });

  if (currBpIdx === -1) return;

  for (
    let i = currBpIdx === 0 ? 0 : currBpIdx - 1;
    i < screenEntries.length;
    i++
  ) {
    const bp = breakpoints?.[screenEntries[i][0]];
    if (bp) return bp;
  }
};
