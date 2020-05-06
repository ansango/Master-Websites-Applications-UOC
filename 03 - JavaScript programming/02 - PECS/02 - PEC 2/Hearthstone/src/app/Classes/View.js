import DeckBuilder from "./DeckBuilder";
export default class View {
  constructor() {
    this.deckBuilder = new DeckBuilder();
    this.rootElement = document.getElementById("app");
    this.init();
  }

  async init() {
    await this.deckBuilder.getInfo();
    await this.deckBuilder.getCardById("LOOTA_BOSS_48h");
    await this.deckBuilder.getCardsByClass("Hunter");
    this.createSelectors();
    this.createCardById();
    this.createCardsByClass();
    this.initDom();
  }

  initDom() {
    this.createButton();
    this.createImages();
  }

  createButton() {
    const button = document.createElement("button");
    button.innerText = "Get Cards";

    button.addEventListener("click", () =>
      console.log(
        this.deckBuilder.getByFilter({ set: "Basic", cardClass: "Hunter" })
      )
    );

    this.rootElement.appendChild(button);
  }

  async createImages() {
    const cards = await this.deckBuilder.getAllCards();

    for (let i in cards) {
      const render = cards[i];
      
      const image = document.createElement("img");
      image.alt = "";
      image.src = render.image;
      this.rootElement.appendChild(image);
    }
  }

  createSelectors() {
    console.log("All Selectors", this.deckBuilder.filters);
  }

  createCardById() {
    console.log("Cards by Id", this.deckBuilder.card);
  }

  createCardsByClass() {
    console.log("Cards by Class", this.deckBuilder.cardsByClass);
  }
}
