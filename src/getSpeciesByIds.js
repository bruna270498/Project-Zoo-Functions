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
console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
