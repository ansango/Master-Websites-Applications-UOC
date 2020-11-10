import Country from "./Country";
import Position from "./Position";
import Person from "./Person";
import Player from "./Player";
import Team from "./Team";
import League from "./League";
import Training from "./Training";

const CALCIO = new League("Serie A", "Calcio Italiano - Serie A", Country.IT);

const ROMA = new Team(
  "Roma AS",
  "Roma Assoziazione Sportiva",
  "scuedeto.jpg",
  "Dan Friedkin",
  "Hyundai",
  150,
  150000000,
  1927
);

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

const jugador9 = new Player(
  "Anibal",
  "Santos",
  "ansango",
  new Date(1989, 2, 7),
  Country.ES,
  1200,
  2000,
  7,
  ROMA,
  9,
  1.8,
  71,
  7
);

jugador9.setPosition(Position.PF);

const workout1 = new Training(jugador9);
workout1.setNumWeeks(3);
workout1.decreaseNumWeeks();

console.log(CALCIO);
console.log(ROMA);
console.log(persona1);
console.log(jugador9);
console.log(workout1);
