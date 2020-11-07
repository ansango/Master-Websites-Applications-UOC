import { Country } from "./Country";
export class League {
  private shortName: string;
  private longName: string;
  //country: Country;
  constructor(
    shortName: string,
    longName: string
    //country: Country
  ) {
    this.shortName = shortName;
    this.longName = longName;
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

  getCountry() {}
  setCountry() {}

  getTeams() {}
  addTeam() {}
  removeTeam() {}

  toString(): string {
    return "";
  }
}
