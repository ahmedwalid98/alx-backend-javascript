export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const typeArr = new Int8Array(length);
  typeArr.fill(value, position, position + 1);
  return new DataView(typeArr.buffer);
}
