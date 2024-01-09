export default function hasValuesFromArray(set, value) {
  return value.map((el) => set.has(el)).length > 0;
}
