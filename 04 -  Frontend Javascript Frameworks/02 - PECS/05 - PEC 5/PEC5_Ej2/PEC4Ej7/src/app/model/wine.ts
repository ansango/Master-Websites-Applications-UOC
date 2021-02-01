import Food from './food';
export default class Wine {
  constructor(
    public id: number,
    public name: string,
    public imgUrl: string,
    public price: number,
    public quantityInCart: number,
    public isOnSale: boolean,    
    public foodParing: Food[]
  ) {}
}
