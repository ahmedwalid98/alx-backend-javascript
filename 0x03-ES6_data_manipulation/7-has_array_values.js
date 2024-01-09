export default function hasValuesFromArray(set, value) {
  return value.every((el) => set.has(el));
}
