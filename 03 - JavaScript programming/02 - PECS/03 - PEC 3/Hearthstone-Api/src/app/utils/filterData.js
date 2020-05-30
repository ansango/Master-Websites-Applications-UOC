import { Filter, Card } from "../Classes/index";
import { endpoints } from "../config";

export function buildingAllFilters(apiData) {
  const filters = new Filter(apiData);
  return filters;
}

export function buildingAllCards(apiData) {
  const resultFiltered = [];

  for (let i in apiData) {
    apiData[i].forEach((e) => resultFiltered.push(e));
  }
  const cards = [];
  resultFiltered.forEach((data) => {
    cards.push(
      new Card({
        id: data.cardId,
        name: data.name,
        image: `${endpoints.img}/${data.cardId}.png`,
        class: data.playerClass,
        set: data.cardSet,
        type: data.type,
        faction: data.faction,
        rarity: data.rarity,
        race: data.race,
      })
    );
  });
  return cards;
}