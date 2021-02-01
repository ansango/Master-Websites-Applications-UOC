import Wine from './wine';

export default interface WineQuantityChange {
  wine: Wine;
  changeInQuantity: number;
}
