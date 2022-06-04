import { Ingredient } from "@/models/recipe/recipe";

const mergeIngredients = (rawData: Ingredient[]): Ingredient[] => {
  const ingredients = rawData.map((ingredient) => {
    const { name, measure } = ingredient;
    const ingredientQuantity = rawData.filter(
      (ingredient) => ingredient.name === name && ingredient.measure === measure
    );
    const sum = ingredientQuantity.reduce(
      (acc, ingredient) => acc + ingredient.quantity,
      0
    );
    return {
      name,
      measure,
      quantity: sum.toString(),
    };
  });

  const uniqueIngredients = ingredients.filter(
    (ingredient, index, self) =>
      index ===
      self.findIndex(
        (t) => t.name === ingredient.name && t.measure === ingredient.measure
      )
  );

  const cleanIngredients = uniqueIngredients.map((ingredient) => {
    if (ingredient.quantity.startsWith("0")) {
      return {
        ...ingredient,
        quantity: parseInt(ingredient.quantity.slice(1)),
      };
    }

    return {
      ...ingredient,
      quantity: parseInt(ingredient.quantity),
    };
  });
  return cleanIngredients;
};

export { mergeIngredients };
