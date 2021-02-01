import Food from './food';
export default interface Wine {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantityInCart: number;
  isOnSale: boolean;
  foodParing: Food[];
}
