const createCs = (prefix: string) => (suffix?: string): string =>
  suffix ? `${prefix}-${suffix}` : prefix;

export { createCs };
