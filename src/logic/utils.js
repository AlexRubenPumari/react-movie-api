// Utilities
export function clamp ({
  value,
  step = 0,
  min = Number.MIN_VALUE,
  max = Number.MAX_VALUE
}) {
  if (value + step >= min && value + step <= max) return value + step

  if (value + step < min) return min
  if (value + step > max) return max
}
