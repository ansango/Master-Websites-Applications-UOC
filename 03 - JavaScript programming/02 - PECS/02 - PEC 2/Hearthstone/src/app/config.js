const urls = {
    data: "https://omgvamp-hearthstone-v1.p.rapidapi.com/",
    cards: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
    img: "https://art.hearthstonejson.com/v1/render/latest/enUS/256x",
  };
  
  export const api = "omgvamp-hearthstone-v1.p.rapidapi.com";
  export const api_token = "d32adfcaeamsh96430efc355be17p12e3abjsn819545fc3600";
  
  export const props = {
      card_id: "ULDA_BOSS_62h",
      card_class: "Hunter",
      card_set: "Classic",
      card_type: "Minion",
      card_faction: "Horde",
      card_qualities: "Free",
      card_races: "Demon",
    };
    export const endpoints = {
      info: `${urls.data}/info`,
      all: `${urls.cards}`,
      classes: `${urls.cards}/classes`,
      sets: `${urls.cards}/sets`,
      types: `${urls.cards}/types`,
      factions: `${urls.cards}/factions`,
      qualities: `${urls.cards}/qualities`,
      races: `${urls.cards}/races`,
      img: `${urls.img}`,
    };