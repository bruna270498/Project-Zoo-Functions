const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.some((specie) => specie.name === animal && specie.residents.every((o) => o.age >= age));
}

module.exports = getAnimalsOlderThan;