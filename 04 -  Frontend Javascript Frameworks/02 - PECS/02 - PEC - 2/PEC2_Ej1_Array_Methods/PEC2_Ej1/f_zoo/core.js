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
  const toHumanReadable = (open, close) => {
    if (open === 0 && close === 0) {
      return `CLOSED`;
    }
    return `Open from ${open}am until ${close % 12}pm`;
  };

  if (typeof dayName === "undefined") {
    const schedule = JSON.parse(JSON.stringify(data.hours));
    const days = Object.keys(schedule);
    days.map((x) => {
      schedule[x] = toHumanReadable(schedule[x].open, schedule[x].close);
    });

    return schedule;
  } else {
    const schedule = JSON.parse(JSON.stringify(data.hours));
    const days = Object.keys(schedule);

    days.map((x) => {
      schedule[x] = toHumanReadable(schedule[x].open, schedule[x].close);
    });

    const filter = [dayName];
    const filtered = Object.keys(schedule)
      .filter((x) => filter.includes(x))
      .reduce((obj, key) => {
        obj[key] = schedule[key];
        return obj;
      }, {});

    return filtered;
  }
}

schedule("Monday");

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
  if (typeof options === "undefined") {
    const animals = JSON.parse(JSON.stringify(data.animals));
    const obj = {};

    const locations = animals
      .map((x) => {
        return x.location;
      })
      .filter((el, index, self) => {
        return index === self.indexOf(el);
      });

    const arr = [];

    animals.filter((x) => {
      return x.location;
    });

    locations.map((x) => {
      obj[x] = "";
    });

    //return obj
  } else {
  }
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  if (typeof ids === "undefined") {
    return [];
  } else if (typeof ids === "string") {
    return data.animals.filter((x) => x.id === ids);
  } else{
    
  }
}

function animalByName(animalName) {
  if (typeof animalName === "undefined") {
    return {};
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
