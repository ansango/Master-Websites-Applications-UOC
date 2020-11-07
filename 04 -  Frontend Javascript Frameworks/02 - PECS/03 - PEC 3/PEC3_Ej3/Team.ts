import { Player } from "./Player";
export class Team {
  private shortName: string;
  private longName: string;
  private imgSrc: string;
  private president: string;
  private sponsor: string;
  private members: number;
  private budget: number = 0;
  private founded: number;
  //private players: Player[];

  constructor(
    shortName?: string,
    longName?: string,
    imageSrc?: string,
    president?: string,
    sponsor?: string,
    members?: number,
    budget?: number,
    founded?: number
  ) {
    this.shortName = shortName;
    this.longName = longName;
    this.imgSrc = imageSrc;
    this.president = president;
    this.sponsor = sponsor;
    this.members = members;
    this.budget = budget;
    this.founded = founded;
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
  getImgSrc(): string {
    return this.imgSrc;
  }
  setImgSrc(imgSrc: string): string {
    return (this.imgSrc = imgSrc);
  }
  getPresident(): string {
    return this.president;
  }
  setPresident(president: string): string {
    return (this.president = president);
  }
  getSponsor(): string {
    return this.sponsor;
  }
  setSponsor(sponsor: string): string {
    return (this.sponsor = sponsor);
  }
  getMembers(): number {
    return this.members;
  }
  setMembers(members: number): number {
    return (this.members = members);
  }
  getBudget(): number {
    return this.budget;
  }
  setBudget(budget: number): number {
    return (this.budget = budget);
  }
  getFounded(): number {
    return this.founded;
  }
  setFounded(founded: number): number {
    return (this.founded = founded);
  }

  addPlayer() {}
  removePlayer() {}
  getLeague() {}
  setLeague() {}

  toString(): string {
    return "";
  }
}
