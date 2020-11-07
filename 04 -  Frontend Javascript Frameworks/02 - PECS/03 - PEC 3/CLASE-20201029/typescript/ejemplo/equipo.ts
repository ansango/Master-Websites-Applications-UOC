import { Club } from "./club";
import { Liga } from "./liga";
import { Estadio } from "./estadio";

export class Equipo extends Club {
  liga: Liga;
  estadio: Estadio;

  constructor(nombre: string, ciudad: string, estadio?: Estadio, liga?: Liga) {
    super(nombre, ciudad);
    this.estadio = estadio;
    this.liga = liga;
    this.liga.equipos = this.liga.equipos || [];
    this.liga.equipos.push(this);
  }
}
