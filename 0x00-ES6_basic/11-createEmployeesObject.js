export default function createEmployeesObject(departmentName, employees) {
  const output = {
    departmentName: [],
  };
  for (const employee of employees) {
    output.departmentName.push(employee);
  }

  return output;
}
