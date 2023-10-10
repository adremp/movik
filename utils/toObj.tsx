export default (els: string[], suffix: "px" | string = "") =>
  els.reduce((acc, el) => ({ ...acc, [el]: el + suffix }), {});
