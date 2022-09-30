const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  return species.some((specie) => {
    return specie.name === animal && specie.residents.every((o) => o.age >= age);
  });
}

module.exports = getAnimalsOlderThan;