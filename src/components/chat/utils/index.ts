const createCs = (prefix: string) => (suffix?: string) =>
  suffix ? `${prefix}-${suffix}` : prefix;

export { createCs };
