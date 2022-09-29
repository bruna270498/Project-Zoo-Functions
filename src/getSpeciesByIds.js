const data = require('../data/zoo_data');

const { species } = data;

const [id, name, popularity, location, availability, residents] = species;

function getSpeciesByIds(...ids) {
  // seu código aqui
  let ficha = [];
  species.forEach((animal) => {
    if (ids[0] === animal.id || ids[1] === animal.id) {
      ficha.push(animal);
    } if (ids === '') {
      return [];
    }
  });
  return ficha;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'))
module.exports = getSpeciesByIds;
