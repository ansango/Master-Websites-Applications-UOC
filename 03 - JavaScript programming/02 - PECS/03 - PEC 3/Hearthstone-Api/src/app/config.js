const urls = {
  data: "https://omgvamp-hearthstone-v1.p.rapidapi.com/",
  cards: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
  img: "https://art.hearthstonejson.com/v1/render/latest/enUS/256x",
};

export const api = "omgvamp-hearthstone-v1.p.rapidapi.com";
export const api_token = "d32adfcaeamsh96430efc355be17p12e3abjsn819545fc3600";

export const endpoints = {
  info: `${urls.data}/info`,
  all: `${urls.cards}`,
  img: `${urls.img}`,
};
