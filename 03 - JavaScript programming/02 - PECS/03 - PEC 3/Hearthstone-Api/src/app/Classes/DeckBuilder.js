import { getInfoFromApi, getAllCardsFromApi } from "../api.js";
export default class DeckBuilder {
  constructor(view) {
    this.init();
    this.allCards = [];
    this._myDeck = [];
    this._filteredCards = [];
    this.view = view;
  }

  async init() {
    await this.getAllCards();
    const filters = await this.getFilters();
    this.view.createSelectors(filters);
  }

  async getFilters() {
    this.filters = await getInfoFromApi();
    return this.filters;
  }

  async getAllCards() {
    this.allCards = await getAllCardsFromApi();
    return this.allCards;
  }

  getCardsBySelector(select) {
    const selectFilters = Object.keys(select);
    this._filteredCards = this.allCards.filter((card) => {
      let checkNameFilter = true;
      for (let i = 0; i < selectFilters.length; i++) {
        if (card[selectFilters[i]] !== select[selectFilters[i]]) {
          checkNameFilter = false;
          break;
        }
      }
      return checkNameFilter;
    });
    this.view.renderCards();
  }

  addCardToMyDeck(card) {
    console.log(card);
    const cardFound = this._myDeck.find((c) => c.id === card.id);

    if (cardFound) {
      cardFound.count += 1;
    } else {
      this._myDeck.push({
        id: card.id,
        name: card.name,
        count: 1,
      });
    }

    this.view.renderMyDeck();
  }

  removeCardFromMyDeck(cardId) {
    console.log(cardId);
    const cardFound = this._myDeck.find((c) => c.id === cardId);
    if (cardFound) {
      if (cardFound.count > 1) {
        cardFound.count -= 1;
      } else {
        this._myDeck = this._myDeck.filter((c) => c.id !== cardId);
      }
    }
    this.view.renderMyDeck();
  }

  get filteredCards() {
    if (this._filteredCards.length > 0) {
      return this._filteredCards;
    }
    return this.allCards;
  }

  get myDeck() {
    return this._myDeck;
  }
}
