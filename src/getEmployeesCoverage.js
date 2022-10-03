const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

const criaObjeto = (cuidador, [specie, location]) => ({
  id: cuidador.id,
  fullName: `${cuidador.firstName} ${cuidador.lastName}`,
  species: specie,
  locations: location,
});

const especieLocal = (cuidador) => {
  const specie = [];
  const location = [];
  cuidador.responsibleFor.forEach((index) => {
    const empregada = species.find((pessoa) => pessoa.id === index);
    specie.push(empregada.name);
    location.push(empregada.location);
  });
  return [specie, location];
};

function getEmployeesCoverage(pessoa) {
  if (!pessoa) {
    return employees.map((empregada) => criaObjeto(empregada, especieLocal(empregada)));
  }
  const cuidador = employees.find((nome) => pessoa.name === nome
    .firstName || pessoa.name === nome.lastName || pessoa.id === nome.id);
  if (!cuidador) {
    throw new Error('Informações inválidas');
  }
  const [specie, location] = especieLocal(cuidador);
  return criaObjeto(cuidador, [specie, location]);
}
module.exports = getEmployeesCoverage;
