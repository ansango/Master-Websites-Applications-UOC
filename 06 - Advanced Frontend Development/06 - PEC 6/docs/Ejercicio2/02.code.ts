class City {
  constructor(public name: string, public zipCode: number) {}

  toString() {
    return `${this.name} (${this.zipCode})`;
  }
}

class Address {
  constructor(public city: City, public streetName: string) {}

  toString() {
    return `${this.streetName} in ${this.city}`;
  }
}

class CleanPerson {
  constructor(
    public name: string,
    public age: number,
    public address: Address
  ) {}

  get description() {
    return `${this.name}, ${this.age} years old, lives in ${this.address}`;
  }
}
