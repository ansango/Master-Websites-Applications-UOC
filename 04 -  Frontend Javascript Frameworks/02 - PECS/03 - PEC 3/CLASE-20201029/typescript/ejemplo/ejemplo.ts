import { Equipo } from "./equipo";
import { LetraDivision } from "./letra-division.enum";
import { Club } from "./club";
import { Liga } from "./liga";
import { Estadio } from "./estadio";

// Al tener un constructor protected, la clase Club no es instanciable, pero sí quienes la extienden
// const club = new Club();
const estadio = new Estadio();
const liga = new Liga(1, LetraDivision.A);
const equipo = new Equipo("", "", estadio, liga);
