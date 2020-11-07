export class Club {
  nombre: string;
  ciudad: string;
  protected CIF: string;

  // Al tener un constructor protected, la clase Club no es instanciable, pero sí quienes la extienden
  protected constructor(nombre: string, ciudad: string) {}
}
