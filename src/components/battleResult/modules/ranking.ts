export const ranking = (arr: number[]): number[] =>
  arr.map((x, _, z) => z.filter((w) => w > x).length + 1)
