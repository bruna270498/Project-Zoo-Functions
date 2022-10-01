const handlerElephants = require('../src/handlerElephants');

const { species } = require('../data/zoo_data');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const count = species.find((specie) => specie.residents.length);
    const animal = species.name;
    const atual = handlerElephants(count, animal);
    const experado = 4;
    expect(atual).toEqual(experado);
  });
});
