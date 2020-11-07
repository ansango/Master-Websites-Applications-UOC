import { Equipo } from "./equipo";
import { LetraDivision } from "./letra-division.enum";

export class Liga {
  division: number;
  letra: LetraDivision;
  equipos: Equipo[];

  // constructor(public division: number, public letra: LetraDivision) {}
  //
  // el constructor comentado es equivalente al de abajo, y nos ahorramos declarar arriba las propiedades

  constructor(division: number, letra: LetraDivision) {
    this.division = division;
    this.letra = letra;
  }

  printEquipos() {
    for (const equipo of this.equipos) {
      console.log(equipo);
    }
  }

  buscarEquiposPorCiudad(ciudad: string) {
    return this.equipos.filter((equipo) => equipo.ciudad === ciudad);
  }

  ejemploSwitch() {
    switch (this.letra) {
      case LetraDivision.A:
        break;
      case LetraDivision.B:
        break;
      default:
        break;
    }
  }
}
