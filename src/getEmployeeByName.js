const data = require('../data/zoo_data');

const { employees } = data;

const { id, firstName, lastName, managers, responsibleFor } = employees;

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.find((nome) => {
    if (nome.firstName === employeeName) {
      return nome;
    }
  });
}
console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
