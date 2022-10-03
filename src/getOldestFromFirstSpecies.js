const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((nome) => nome.id === id).responsibleFor[0];
  const l = species.find((e) => animal === e.id);
  const a = l.residents.reduce((arr, curr) => {
    if (curr.age > arr.age) {
      return curr;
    }
    return arr;
  });
  return Object.values(a);
}
module.exports = getOldestFromFirstSpecies;
