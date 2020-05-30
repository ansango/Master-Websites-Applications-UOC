import DeckBuilder from "./DeckBuilder";
export default class View {
  constructor() {
    this.deckBuilder = new DeckBuilder(this);
    this.selectElement = document.getElementById("selectors");
    this.cardsElement = document.getElementById("hearthStone_cardSelector");
    this.myDeckElement = document.getElementById("hearthStone_deckBuilder");
    this.summaryElement = document.getElementById("hearthStone_cardSummary");
    this.selectState = {};
  }

  createSelectors(filters) {
    for (const filter in filters) {
      const properties = filters[filter];
      const selectNames = `All ${filter}`;

      properties.unshift(selectNames);

      const select = document.createElement("select");
      select.name = selectNames;
      select.className = "select-css";
      select.id = filter;

      for (let i = 0; i < properties.length; i++) {
        const options = document.createElement("option");

        options.text = properties[i];
        if (options.text === selectNames) {
          options.selected = true;
        }

        select.appendChild(options);
      }

      this.selectElement.appendChild(select);
      select.addEventListener("change", (event) => {
        this.selectState[event.target.id] = event.target.value;
        this.deckBuilder.getCardsBySelector(this.selectState);
      });
    }
  }

  renderCards() {
    this.cardsElement.innerHTML = "";
    const localCards = this.deckBuilder.filteredCards;
    for (let i = 0; i < localCards.length; i++) {
      const card = document.createElement("img");
      card.id = localCards[i].id;
      card.src = localCards[i].image;
      card.onerror = () => {
        let cardNotFound = document.createElement("div");
        cardNotFound.id = `${localCards[i].id}`;
        cardNotFound.className = "card-not-found";
        cardNotFound.innerHTML = `${localCards[i].name} - Not found`;
        this.cardsElement.appendChild(cardNotFound);
        this.initCardListener(cardNotFound);
      };
      card.onload = () => {
        this.cardsElement.appendChild(card);
        this.initCardListener(card);
      };
    }
  }

  initCardListener(card) {
    card.addEventListener("click", (event) => {
      const localCard = this.deckBuilder.filteredCards.find(
        (card) => card.id === event.target.id
      );
      this.deckBuilder.addCardToMyDeck(localCard);
      this.deckBuilder.myDeck;
    });
    card.addEventListener("mouseover", (event) => {
      const localCard = this.deckBuilder.filteredCards.find(
        (card) => card.id === event.target.id
      );
      this.summaryElement.innerHTML = "Card summary:";
      for (const props in localCard) {
        const parr = document.createElement("p");
        parr.innerHTML = `${localCard[props]}`;
        this.summaryElement.appendChild(parr);
      }
    });
  }

  renderMyDeck() {
    this.myDeckElement.innerHTML = "";

    const myDeck = this.deckBuilder.myDeck;

    for (let i = 0; i < myDeck.length; i++) {
      const cardDiv = document.createElement("div");
      cardDiv.id = `${myDeck[i].id}`;
      cardDiv.innerHTML = `${myDeck[i].name} x ${myDeck[i].count}`;
      this.myDeckElement.appendChild(cardDiv);

      cardDiv.addEventListener("click", (event) => {
        this.deckBuilder.removeCardFromMyDeck(event.target.id);
      });
    }
  }
}
