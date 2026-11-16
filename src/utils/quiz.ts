export function sampleQuestions<T>(
  bank: readonly T[],
  count: number,
  random: () => number = Math.random,
): T[] {
  const copy = [...bank];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.max(0, Math.min(count, copy.length)));
}
