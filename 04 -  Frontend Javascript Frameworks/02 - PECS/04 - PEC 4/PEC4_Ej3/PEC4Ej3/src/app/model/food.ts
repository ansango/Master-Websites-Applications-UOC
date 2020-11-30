export default class Food {
  constructor(
    public name: string,
    public kcal: number,
    public vegan: boolean,
    public gluten: boolean
  ) {
    this.name = name;
    this.kcal = kcal;
    this.vegan = vegan;
    this.gluten = gluten;
  }
}
