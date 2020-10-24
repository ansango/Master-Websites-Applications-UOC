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
  const animals = JSON.parse(JSON.stringify(data.animals));
  if (typeof options === "undefined") {
    return animals
      .map((e) => {
        return {
          name: e.name,
          location: e.location,
        };
      })
      .reduce((a, e) => {
        if (Array.isArray(a[e.location])) {
          a[e.location].push(e.name);
        } else {
          a[e.location] = [e.name];
        }
        return a;
      }, {});
  } else {
    const filtered = {};
    animals.forEach((animal) => {
      if (!filtered[animal.location]) {
        filtered[animal.location] = [];
      }
      filtered[animal.location].push({
        // * si aplicamos el filter despues de map desaparece el sexo
        [animal.name]: animal.residents
          .filter((r) => (options.sex ? r.sex === options.sex : true))
          .map((a) => a.name),
      });
    });
    return filtered;
  }
}

function animalPopularity(rating) {
  const animals = JSON.parse(JSON.stringify(data.animals));
  if (typeof rating === "undefined") {
    return animals
      .map((e) => {
        return {
          name: e.name,
          popularity: e.popularity,
        };
      })
      .reduce((a, e) => {
        if (!Array.isArray(a[e.popularity])) a[e.popularity] = [];
        a[e.popularity].push(e.name);
        return a;
      }, {});
  } else {
    return animals.filter((e) => e.popularity === rating).map((e) => e.name);
  }
}

function animalsByIds(ids) {
  if (typeof ids === "undefined") {
    return [];
  } else if (typeof ids === "string") {
    return data.animals.filter((x) => x.id === ids);
  } else {
    const animals = JSON.parse(JSON.stringify(data.animals));
    return animals.filter((animal) => ids.includes(animal.id));
  }
}

function animalByName(animalName) {
  if (typeof animalName === "undefined") {
    return {};
  } else {
    const animals = JSON.parse(JSON.stringify(data.animals));
    const filtered = animals.find((animal) =>
      animal.residents.map((resident) => resident.name).includes(animalName)
    );
    const animalData = filtered.residents.find(
      (animal) => animal.name === animalName
    );
    return { ...animalData, species: filtered.name };
  }
}

function employeesByIds(ids) {
  if (typeof ids === "undefined") {
    return [];
  } else if (typeof ids === "string") {
    const employees = JSON.parse(JSON.stringify(data.employees));
    return employees.filter((employee) => employee.id === ids);
  } else {
    const employees = JSON.parse(JSON.stringify(data.employees));
    return employees.filter((employee) => ids.includes(employee.id));
  }
}

function employeeByName(employeeName) {
  if (typeof employeeName === "undefined") {
    return {};
  } else {
    const employees = JSON.parse(JSON.stringify(data.employees));
    return employees.find((employee) =>
      [employee.firstName, employee.lastName].includes(employeeName)
    );
  }
}

function managersForEmployee(idOrName) {
  const employees = JSON.parse(JSON.stringify(data.employees));

  // * buscamos el empleado

  const employee = employees.find((e) =>
    [e.id, e.firstName, e.lastName].includes(idOrName)
  );

  // * buscamos sus managers

  employee.managers = employee.managers.map((managerId) => {
    // * buscamos en manager por el id

    const manager = employees.find((e) =>
      [e.id, e.firstName, e.lastName].includes(managerId)
    );

    // * retornamos y el valor que se retorna reemplaza el original (el id)

    return `${manager.firstName} ${manager.lastName}`;
  });

  return employee;
}

function employeeCoverage(idOrName) {
  const employees = JSON.parse(JSON.stringify(data.employees));
  const animals = JSON.parse(JSON.stringify(data.animals));

  if (typeof idOrName === "undefined") {
    const _employees = {};
    employees.forEach((employee) => {
      _employees[
        `${employee.firstName} ${employee.lastName}`
      ] = employee.responsibleFor.map((animalId) => {
        const _animal = animals.find((a) => a.id === animalId);
        return _animal.name;
      });
    });
    return _employees;
  } else {
    const _employee = {};
    const employee = employees.find((employee) =>
      [employee.id, employee.firstName, employee.lastName].includes(idOrName)
    );
    _employee[
      `${employee.firstName} ${employee.lastName}`
    ] = employee.responsibleFor.map((animalId) => {
      const _animal = animals.find((a) => a.id === animalId);
      return _animal.name;
    });
    return _employee;
  }
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
