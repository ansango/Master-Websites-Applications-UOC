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

export function buildingCardById(apiData) {
  const resultFiltered = apiData;
  const card = [];
  resultFiltered.forEach((data) => {
    card.push(
      new Card({
        id: data.cardId,
        image: `${endpoints.img}/${data.cardId}.png`,
        name: data.name,
        class: data.playerClass,
        set: data.cardSet,
        type: data.type,
        faction: data.faction,
        rarity: data.rarity,
        race: data.race,
      })
    );
  });
  return card[0];
}

export function buildingCardsByFilter(apiData) {
  const resultFiltered = apiData;
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
