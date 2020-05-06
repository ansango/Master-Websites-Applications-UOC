import {
  getInfoFromApi,
  getAllCardsFromApi,
  getCardsByClassFromApi,
  getCardsBySetFromApi,
  getCardsByTypeFromApi,
  getCardsByFactionFromApi,
  getCardsByQualityFromApi,
  getCardsByRaceFromApi,
  getCardByIdFromApi,
} from "../api.js";
export default class DeckBuilder {
  constructor() {
    this.filters = {};
    this.card = {};
    this.allCards = {};
    this.cardsByClass = {};
    this.cardsBySets = {};
    this.cardsByTypes = {};
    this.cardsByFactions = {};
    this.cardsByQualities = {};
    this.cardsByRaces = {};
  }

  async getInfo() {
    this.filters = await getInfoFromApi();
    return this.filters;
  }

  async getCardById(id) {
    this.card = await getCardByIdFromApi(id);
    return this.card;
  }

  async getAllCards() {
    this.allCards = await getAllCardsFromApi();
    return this.allCards;
  }

  async getCardsByClass(pClass) {
    this.cardsByClass = await getCardsByClassFromApi(pClass);
    return this.cardsByClass;
  }

  async getCardsBySets(set) {
    this.cardsBySets = await getCardsBySetFromApi(set);
    return this.cardsBySets;
  }

  async getCardsByTypes(type) {
    this.cardsByTypes = await getCardsByTypeFromApi(type);
    return this.cardsByTypes;
  }

  async getCardsByFactions(faction) {
    this.cardsByFactions = await getCardsByFactionFromApi(faction);
    return this.cardsByFactions;
  }

  async getCardsByQualities(quality) {
    this.cardsByQualities = await getCardsByQualityFromApi(quality);
    return this.cardsByQualities;
  }

  async getCardsByRaces(race) {
    this.cardsByRaces = await getCardsByRaceFromApi(race);
    return this.cardsByRaces;
  }

}
