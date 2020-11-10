import Player from "./Player";

export default class Training {
  private numWeeks: number = 0;
  player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  getNumWeeks(): number {
    return this.numWeeks;
  }
  setNumWeeks(numWeeks: number) {
    return (this.numWeeks = numWeeks);
  }

  getPlayer(): Player {
    return this.player;
  }
  setPlayer(player: Player): Player {
    return (this.player = player);
  }

  increaseNumWeeks(): number {
    return this.numWeeks++;
  }
  decreaseNumWeeks(): number {
    return this.numWeeks--;
  }

  toString(): string {
    return "";
  }
}
