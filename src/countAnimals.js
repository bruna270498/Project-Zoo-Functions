const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const especieResidente = {};
    species.forEach((animais) => {
      especieResidente[animais.name] = animais.residents.length;
    });
    return especieResidente;
  }
  const parametro = Object.keys(animal);
  if (parametro.length === 1) {
    const especie = species.find((elemento) => elemento.name === animal.specie);
    return especie.residents.length;
  }
}
module.exports = countAnimals;
