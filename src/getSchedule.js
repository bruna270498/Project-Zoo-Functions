const data = require('../data/zoo_data');

const { species, hours } = data;

const retornaDia = (dia) => {
  const { open, close } = hours[dia];
  if (dia === 'Monday') {
    const domingo = {
      [dia]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
    return domingo;
  }
  const lista = species.filter((animal) => animal.availability.includes(dia))
    .map((animal) => animal.name);
  return {
    [dia]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: lista,
    },
  };
};
function getSchedule(scheduleTarget) {
  if (hours[scheduleTarget]) {
    return retornaDia(scheduleTarget);
  }
  const dias = species.find(({ name }) => scheduleTarget === name);
  if (dias) { return dias.availability; }

  return Object.keys(hours).reduce((total, atual) => {
    const diaFuncionamento = retornaDia(atual);
    return { ...total, ...diaFuncionamento };
  }, {});
}
console.log(getSchedule());

module.exports = getSchedule;
