export const normalize = (
  lowerBound: number,
  upperBound: number,
  minValue: number,
  maxValue: number,
  value: number
): number => {
  return (
    (upperBound - lowerBound) * ((value - minValue) / maxValue - minValue) +
    lowerBound
  );
};
