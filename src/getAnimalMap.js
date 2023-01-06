const data = require('../data/zoo_data');

const { species } = data;
const animal = () => {
  const animais = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((specie) => animais[specie.location].push(specie.name));
  return animais;
};
const verificar = (residents, sex) => {
  const nomes = [];
  residents.forEach((sexo) => {
    if (sexo.sex === sex) {
      nomes.push(sexo.name);
    }
  });
  return nomes;
};

const nomeAnimal = (sorted, sex) => {
  const animais = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((specie) => {
    const nomes = {};
    nomes[specie.name] = specie.residents.map(({ name }) => name);
    if (sex) { nomes[specie.name] = verificar(specie.residents, sex); }
    if (sorted) {
      nomes[specie.name].sort();
    }
    animais[specie.location].push(nomes);
  });
  return animais;
};
function getAnimalMap(options) {
  if (options && options.includeNames) {
    return nomeAnimal(options.sorted, options.sex);
  }
  return animal();
}

module.exports = getAnimalMap;
