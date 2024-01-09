export default function createInt8TypedArray(length, position, value) {
  const typeArr = new Int8Array(length);
  typeArr[position] = value;
  return typeArr;
}
