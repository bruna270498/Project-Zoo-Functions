const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const o = {};
    species.forEach((animais) => {
      o[animais.name] = animais.residents.length;
    });
    return o;
  }
}
console.log(countAnimals());

module.exports = countAnimals;
