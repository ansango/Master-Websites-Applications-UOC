import { Player } from "./Player";

export class Training {
  private numWeeks: number = 0;
  player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  getNumWeeks() {}
  setNumWeeks() {}

  getPlayer() {}
  setPlayer() {}

  increaseNumWeeks() {}
  decreaseNumWeeks() {}

  toString(): string {
    return "";
  }
}
