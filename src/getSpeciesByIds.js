const data = require('../data/zoo_data');

const { species } = data;

const [id, name, popularity, location, availability, residents] = species;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const ficha = [];
  species.forEach((animal) => {
    if (ids[0] === animal.id || ids[1] === animal.id) {
      ficha.push(animal);
    } if (ids === '') {
      return [];
    }
  });
  return ficha;
}

module.exports = getSpeciesByIds;
