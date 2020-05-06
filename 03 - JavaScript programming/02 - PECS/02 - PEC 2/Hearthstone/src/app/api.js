import { api, api_token, endpoints } from "./config";
import {
  buildingCardById,
  buildingAllCards,
  buildingAllFilters,
  buildingCardsByFilter,
} from "./utils/filterData";

const method = {
  get: "GET",
};

const headers = {
  "x-rapidapi-host": api,
  "x-rapidapi-key": api_token,
};

export async function getEndpoint(url) {
  try {
    const response = await fetch(url, { method: method.get, headers });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("failed fetch", err.message);
  }
}

export async function getInfoFromApi() {
  const data = await getEndpoint(endpoints.info);
  const newData = buildingAllFilters(data);
  return newData;
}

export async function getAllCardsFromApi() {
  const data = await getEndpoint(endpoints.all);
  const newData = buildingAllCards(data);
  return newData;
}

export async function getCardByIdFromApi(id) {
  const data = await getEndpoint(`${endpoints.all}/${id}`);
  const newData = buildingCardById(data);
  return newData;
}

export async function getCardsByClassFromApi(classes) {
  const data = await getEndpoint(`${endpoints.classes}/${classes}`);
  const newData = buildingCardsByFilter(data);
  return newData;
}

export async function getCardsBySetFromApi(set) {
  const data = await getEndpoint(`${endpoints.sets}/${set}`);
  const newData = buildingCardsByFilter(data);
  return newData;
}

export async function getCardsByTypeFromApi(type) {
  const data = await getEndpoint(`${endpoints.types}/${type}`);
  const newData = buildingCardsByFilter(data);
  return newData;
}

export async function getCardsByFactionFromApi(faction) {
  const data = await getEndpoint(`${endpoints.factions}/${faction}`);
  const newData = buildingCardsByFilter(data);
  return newData;
}

export async function getCardsByQualityFromApi(quality) {
  const data = await getEndpoint(`${endpoints.qualities}/${quality}`);
  const newData = buildingCardsByFilter(data);
  return newData;
}

export async function getCardsByRaceFromApi(race) {
  const data = await getEndpoint(`${endpoints.races}/${race}`);
  const newData = buildingCardsByFilter(data);
  return newData;
}
