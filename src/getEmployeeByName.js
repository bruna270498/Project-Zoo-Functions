const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }

  let o;
  employees.forEach((nome) => {
    if (nome.firstName === employeeName || nome.lastName === employeeName) {
      o = nome;
    }
  });
  return o;
}
module.exports = getEmployeeByName;
