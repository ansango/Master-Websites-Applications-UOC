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
  const allAnimals = data.animals.reduce((acc, el) => {
    acc[el.name] = el.residents.length;
    return acc;
  }, {});

  if (typeof species === "undefined") {
    return allAnimals;
  } else {
    const countAnimal = data.animals.filter(
      (animal) => animal.name === species
    )[0].residents.length;
    return countAnimal;
  }
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  if(typeof ids === 'undefined') {
    return []
  }

  const animbalById = data.animals.filter(x => x.id === ids)

  

}

function animalByName(animalName) {
  if(typeof animalName === 'undefined') {
    return {}
  }
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
