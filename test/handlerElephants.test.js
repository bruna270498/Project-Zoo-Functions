const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const atual = handlerElephants('count');
    const experado = 4;
    expect(atual).toEqual(experado);
  });
  it('retorna um array de nomes', () => {
    const atual = handlerElephants('names');
    const experado = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(atual).toEqual(experado);
  });
  it('retorna a divisão total das idades dos elefantes', () => {
    const atual = handlerElephants('averageAge');
    const experado = 10.50;
    expect(atual).toEqual(experado);
  });
  it('retorna undefined se passar parametro vazio', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retone mensagem se o parametro passado for diferente de string', () => {
    const atual = handlerElephants(5);
    const actual = handlerElephants(true);
    const experado = 'Parâmetro inválido, é necessário uma string';
    expect(atual).toBe(experado);
    expect(actual).toBe(experado);
  });
  it('retorne valor referente a chave passada', () => {
    const atual = handlerElephants('name');
    const atual1 = handlerElephants('id');
    const atual2 = handlerElephants('location');
    const experado = 'elephants';
    const experado1 = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    const experado2 = 'NW';
    expect(atual).toBe(experado);
    expect(atual1).toBe(experado1);
    expect(atual2).toBe(experado2);
  });
  it('ao passar parametro que não tem no objeto retornar null', () => {
    const atual = handlerElephants('nome');
    expect(atual).toBeNull();
  });
});
