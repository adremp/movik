export default (data: Record<string, Date | string>) => {
  const ret = { ...data };
  for (const key in ret) {
		const val = ret[key]
    if (val instanceof Date) {
      ret[key] = val.toISOString();
    }
  }
  return ret as Record<string, string>;
};
