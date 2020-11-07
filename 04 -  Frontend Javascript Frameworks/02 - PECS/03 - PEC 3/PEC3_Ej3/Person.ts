import { Country } from "./Country";

export class Person {
  private name: string;
  private surname: string;
  private nick: string;
  birthday: Date;
  country: Country;
  salary: number;
  cancellationClause: number;
  contractYears: number;

  constructor(
    name: string,
    surname: string,
    nick: string,
    birthday: Date,
    country: Country,
    salary: number,
    cancellationClause: number,
    contractYears: number
  ) {
    this.name = name;
    this.surname = surname;
    this.nick = nick;
    this.birthday = birthday;
    this.country = country;
    this.salary = salary;
    this.cancellationClause = cancellationClause;
    this.contractYears = contractYears;
  }

  getName(): string {
    return this.name;
  }
  setName(name: string): string {
    return (this.name = name);
  }
  getSurName(): string {
    return this.surname;
  }
  setSurName(surname: string): string {
    return (this.surname = surname);
  }
  getNick(): string {
    return this.nick;
  }
  setNick(nick: string): string {
    return (this.nick = nick);
  }
  getBirthday(): Date {
    return this.birthday;
  }
  setBirthday(birthday: Date): Date {
    return (this.birthday = birthday);
  }

  getCountry() {}
  setCountry() {}
  getTeam() {}
  setTeam() {}

  toString(): string {
    return "";
  }
}
