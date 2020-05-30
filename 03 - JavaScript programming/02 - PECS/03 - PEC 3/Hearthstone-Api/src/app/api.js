import { api, api_token, endpoints } from "./config";
import { buildingAllFilters, buildingAllCards } from "./utils/filterData";

const method = {
  get: "GET",
};

export const headers = {
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
