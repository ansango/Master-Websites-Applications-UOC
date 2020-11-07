class Animal {
  raza: string;
  protected respira() {}
}

class Controller {}

class Persona extends Animal {
  nombre?: string;
  controller: Controller;

  constructor(nombre: string = "") {
    super();
    this.nombre = nombre;
  }

  hablar() {
    this.hablarAlgo();
    this.respira();
  }
  hablarAlgo(algo?: string) {
    console.log(algo);
  }
}

let persona = new Persona();

class Foo {
  algo: Persona;
  bar([p1, p2, p3]: number[]) {}
}

let foo = new Foo();
foo.bar([1, 2, 3, 4, 5, 6]);

class Team {
  shortName: string;
  league: League;
}

class League {
  shortName: string;
  teams: Team[];
  nivel: Nivel;
  //country: Country;

  foo() {
    switch (this.nivel) {
      case Nivel.AU:
        break;

      default:
        break;
    }
  }
}

export enum Nivel {
  ES,
  EN,
  AU,
}
