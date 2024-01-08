export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (acc, { id }) => acc + id, 0,
    );
  }
  return [];
}
