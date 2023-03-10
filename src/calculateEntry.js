const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const criança = entrants.filter((visitante) => visitante.age < 18);
  const adulto = entrants.filter((visitante) => visitante.age >= 18 && visitante.age < 50);
  const senior = entrants.filter((visitante) => visitante.age >= 50);
  return { adult: adulto.length, child: criança.length, senior: senior.length };
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const adulto = countEntrants(entrants).adult;
  const filho = countEntrants(entrants).child;
  const senio = countEntrants(entrants).senior;
  const total = (adulto * prices.adult) + (filho * prices.child) + (senio * prices.senior);
  return total;
}
module.exports = { calculateEntry, countEntrants };
