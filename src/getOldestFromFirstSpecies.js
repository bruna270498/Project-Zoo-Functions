const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const pessoa = employees.filter((nome) => nome.id === id)
    .map((animais) => animais.responsibleFor);
  const animal = species.filter((a) => {
    let r = '';
    pessoa.forEach((index) => {
      if (index === a.id) {
        r = a.name;
      }
    });
    return r;
  });
  return animal;
}
console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = getOldestFromFirstSpecies;
