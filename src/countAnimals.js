const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const especieResidente = {};
  if (!animal) {
    species.forEach((animais) => {
      especieResidente[animais.name] = animais.residents.length;
    });
    return especieResidente;
  }
  const especie = species.find(({ name }) => name === animal.specie);
  if (animal.specie && animal.sex) {
    return especie.residents.filter(({ sex }) => sex === animal.sex).length;
  }
  return especie.residents.length;
}
module.exports = countAnimals;
