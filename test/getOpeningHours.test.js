const getOpeningHours = require('../src/getOpeningHours');

const aberto = 'The zoo is open';

const fechado = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('retorna um objeto de dia quando não for passado nenhum parametro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 } });
  });
  it('retorna fechado quando passado dia ou hora que estaja fechado', () => {
    expect(getOpeningHours('Tuesday', '7:30-pm')).toBe(fechado);
    expect(getOpeningHours('Monday', '9:00-am')).toBe(fechado);
  });
  it('retorne aberto, quando passado um parametro que esteja aberto', () => {
    expect(getOpeningHours('Wednesday', '10:00-am')).toBe(aberto);
    expect(getOpeningHours('Thursday', '5:00-pm')).toBe(aberto);
    expect(getOpeningHours('Friday', '11:00-am')).toBe(aberto);
    expect(getOpeningHours('Saturday', '9:00-am')).toBe(aberto);
    expect(getOpeningHours('Sunday', '1:00-pm')).toBe(aberto);
  });
  it('retorna um erro quando não for passado am ou pm', () => {
    expect(() => getOpeningHours('Wednesday', '10:00-cm').toThrow('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('retorna erro quando for passado numero maior que 12 em horas ou maior que 59 em min', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-am').toThrow('The hour must be between 0 and 12'));
    expect(() => getOpeningHours('Saturday', '9:60-am').toThrow('The minutes must be between 0 and 59'));
    expect(() => getOpeningHours('Sunday', '9:70-am').toThrow('The minutes must be between 0 and 59'));
  });
  it('retorne um erro quando for passado uma string', () => {
    expect(() => getOpeningHours('rrr').toThrow('The day must be valid. Example: Monday'));
    expect(() => getOpeningHours('oiy').toThrow('The day must be valid. Example: Monday'));
  });
});
