const data = require('../data/zoo_data');

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const pessoa = employees.filter((nome) => nome.id === id);
  pessoa.find((o) => o.responsibleFor);
  console.log(pessoa.responsibleFor);
}
getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8');

module.exports = getOldestFromFirstSpecies;
