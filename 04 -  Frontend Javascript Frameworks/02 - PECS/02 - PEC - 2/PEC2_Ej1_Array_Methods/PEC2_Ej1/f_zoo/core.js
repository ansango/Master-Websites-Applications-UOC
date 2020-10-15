const data = require("./data");
function entryCalculator(entrants) {
  if (typeof entrants === "undefined" || Object.keys(entrants).length === 0) {
    return 0;
  } else {
    const prices = data.prices;
    const totalPriceAdult = prices.Adult * entrants.Adult;
    const totalPriceChild = prices.Child * entrants.Child;
    const totalPriceSenior = prices.Senior * entrants.Senior;
    return totalPriceAdult + totalPriceChild + totalPriceSenior;
  }
}

function schedule(dayName) {
  // your code here
}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage,
};
