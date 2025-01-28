const prefix = "job--";

export const namespace = (name: string) => {
  return `${prefix}${name}`;
};
