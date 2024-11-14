export function getFactor(name: string): number {
  const values = 20;
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return (sum % values) / values;
}
