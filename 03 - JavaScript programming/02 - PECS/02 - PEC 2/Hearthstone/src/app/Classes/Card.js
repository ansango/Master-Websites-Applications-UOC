export default class Card {
  constructor(data) {
    // check if prop is undefined
    for (let prop in data) {
      if (data[prop] === undefined) {
        data[prop] = `No ${prop}`;
      }
    }

	this.id = data.id;
	this.image = data.image;
    this.name = data.name;
    this.class = data.class;
    this.set = data.set;
    this.type = data.type;
    this.faction = data.faction;
    this.rarity = data.rarity;
    this.race = data.race;
  }
}
