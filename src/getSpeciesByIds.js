const data = require('../data/zoo_data');

const { species } = data;

const [id, name, popularity, location, availability, residents] = species;

function getSpeciesByIds(ids, ...rest) {
  // seu código aqui
  let ficha = [];
  species.forEach((animal) => {
    if (ids === animal.id) {
      ficha.push(animal);
    } if (ids === '') {
      return [];
    }
  });
  return ficha;
}

module.exports = getSpeciesByIds;
