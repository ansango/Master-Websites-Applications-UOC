interface Item {
  price: number;
}

const generateItems = (): Item[] =>
  Array(10)
    .fill(0)
    .map(() => ({ price: Math.random() * 10 }));

const sumItemPrices = (items: Item[]) =>
  items.reduce((priceSum, item) => priceSum + item.price, 0);

const applyTwentyPercentDiscount = (price: number) => price * 0.8;

const cleanComputePrice = (): number => {
  const items = generateItems();

  return applyTwentyPercentDiscount(sumItemPrices(items));
};
