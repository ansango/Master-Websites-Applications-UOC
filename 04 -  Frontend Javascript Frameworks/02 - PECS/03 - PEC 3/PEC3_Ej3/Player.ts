import { Person } from "./Person";
import { Country } from "./Country";
import { Team } from "./Team";
import { Position } from "./Position";
import { Training } from "./Training";

export class Player extends Person {
  number: number;
  height: number;
  weight: number;
  numInternational: number = 0;
  position: Position;
  injuredWeeks: number = 0;
  team: Team;
  training: Training;

  constructor(
    name: string,
    surName: string,
    nick: string,
    birthday: Date,
    country: Country,
    salary: number,
    cancellationClause: number,
    contractYears: number,
    team: Team,
    number: number,
    height: number,
    weight: number,
    position: Position,
    numInternational: number,
    injuredWeeks: number
  ) {
    super(
      name,
      surName,
      nick,
      birthday,
      country,
      salary,
      cancellationClause,
      contractYears
    );

    this.number = number;
    this.height = height;
    this.weight = weight;
    this.position = position;
    this.numInternational = numInternational;
    this.team = team;
  }

  getNumber(): number {
    return this.number;
  }
  setNumber(number: number): number {
    return (this.number = number);
  }
  getNumInternational(): number {
    return this.numInternational;
  }
  setNumInternational(numInternational: number): number {
    return (this.numInternational = numInternational);
  }

  // TODO:
  getPosition(): Position {
    return this.position;
  }
  setPosition(position: Position): Position {
    return (this.position = position);
  }
  isInjured() {}
  getInjuredWeeks() {}
  setInjuredWeeks() {}
  getTraining(): Training {
    return this.training;
  }
  setTraining(training: Training): Training {
    return (this.training = training);
  }

  toString(): string {
    return "";
  }
}
