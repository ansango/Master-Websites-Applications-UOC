/**
 * * Primitive Obsession
 */

class Person {
  constructor(
    private name: string,
    private age: number,
    private homeCityName: string,
    private homeStreetName: string,
    private homeZipCode: number
  ) {}

  get description() {
    return `${this.name}, ${this.age} years old, lives in ${this.address}`;
  }

  get address() {
    return `${this.homeStreetName} in ${this.homeCityName} (${this.homeZipCode})`;
  }
}
