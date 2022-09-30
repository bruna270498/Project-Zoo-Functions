const data = require('../data/zoo_data');

const {employees} = data;

function isManager(id) {
  // seu código aqui
  return employees.some((gerente) => gerente.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager());
module.exports = { isManager, getRelatedEmployees };
