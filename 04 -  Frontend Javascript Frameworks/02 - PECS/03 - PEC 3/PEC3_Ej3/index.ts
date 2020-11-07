import { Country } from "./Country";
import { Person } from "./Person";

const persona1 = new Person(
  "Anibal",
  "Santos",
  "ansango",
  new Date(1989, 2, 7),
  Country.ES,
  1200,
  2000,
  7
);

console.log(persona1);
