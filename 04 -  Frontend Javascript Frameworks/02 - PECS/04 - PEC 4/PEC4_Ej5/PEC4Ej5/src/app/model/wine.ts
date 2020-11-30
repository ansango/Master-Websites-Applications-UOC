import Food from './food';
export default class Wine {
  constructor(
    public name: string,
    public imgUrl: string,
    public price: number,
    public quantityInCart: number,
    public isOnSale: boolean,
    public foodParing: Food[]
  ) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.price = price;
    this.quantityInCart = quantityInCart;
    this.isOnSale = isOnSale;
    this.foodParing = foodParing;
  }

  isOnStock(){
      return this.isOnSale === true;
  }
}
