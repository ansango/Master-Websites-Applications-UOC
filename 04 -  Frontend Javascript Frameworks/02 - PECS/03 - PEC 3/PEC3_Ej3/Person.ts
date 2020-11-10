import Country from "./Country";
import Team from "./Team";

export default class Person {
  private name: string;
  private surname: string;
  private nick: string;
  birthday: Date;
  country: Country;
  salary: number;
  cancellationClause: number;
  contractYears: number;
  team: Team;

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

  getCountry(): Country {
    return this.country;
  }
  setCountry(country: Country): Country {
    return (this.country = country);
  }
  getTeam(): Team {
    return this.team;
  }
  setTeam(team: Team): Team {
    return (this.team = team);
  }

  toString(): string {
    return "";
  }
}
