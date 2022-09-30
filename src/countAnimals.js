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
  const l = Object.keys(animal);
  if (l.length === 1) {
    const especie = species.find((elemento) => elemento.name === animal.specie);
    return especie.residents.length;
  }
  if (l.length === 2) {
    const especie = species.find((elemento) => elemento.name === animal.specie && elemento.sex === animal.sex);
    return especie.residents.length;
  }
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
