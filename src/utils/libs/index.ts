export const generateArray = (length: number): number[] =>
  Array.from({ length }, (_, index) => index + 1);
