import Country from "./Country";
import Team from "./Team";
export default class League {
  private shortName: string;
  private longName: string;
  country: Country;
  teams: Team[];
  team: Team;
  constructor(shortName: string, longName: string, country: Country) {
    this.shortName = shortName;
    this.longName = longName;
    this.country = country;
  }

  getShortName(): string {
    return this.shortName;
  }
  setShortName(shortName: string): string {
    return (this.shortName = shortName);
  }

  getLongName(): string {
    return this.longName;
  }
  setLongName(longName: string): string {
    return (this.longName = longName);
  }

  getCountry(): Country {
    return this.country;
  }
  setCountry(country: Country): Country {
    return (this.country = country);
  }

  getTeams(): Team[] {
    return this.teams;
  }
  addTeam(team: Team): Team[] {
    return this.teams;
  }
  removeTeam(team: Team): Team[] {
    return this.teams;
  }

  toString(): string {
    return "";
  }
}
