export interface Activity {
  id?: number;
  name: string;
  category: ActivityCategory;
  subcategory:
    | ActivitySubcategoryCulture
    | ActivitySubcategoryWine
    | ActivitySubcategoryBeach;
  description: string;
  language: ActivityLanguage;
  price: number;
  date: Date;
  peopleRegistered?: number;
  adminId?: number;
}

export interface MyActivity {
  id?: number;
  activityId: number;
  userId: number;
}

export enum ActivityCategory {
  CULTURE = 'culture and heritage',
  WINE = 'wine tourism',
  BEACH = 'beach',
}

export enum ActivitySubcategoryCulture {
  CONCERT = 'concert',
  SHOW = 'show',
  EXCURSION = 'excursion',
  FESTIVALS = 'festivals',
  TOUR = 'guided tour',
  MUSEUM = 'museum',
  MONUMENT = 'monument',
}

export enum ActivitySubcategoryWine {
  WINERY = 'winery',
  TASTING = 'product tasting',
  EXCURSION = 'excursion',
  MUSEUM = 'wine museum',
  TOUR = 'guided tour',
}

export enum ActivitySubcategoryBeach {
  ACTIVITY = 'nautical activity',
  COVE = 'cove',
  CONCERT = 'concert',
  EXCURSION = 'excursion',
  WORKSHOP = 'workshop',
}

export enum ActivityLanguage {
  ES = 'es',
  EN = 'en',
  CAT = 'cat',
  FR = 'fr',
  DE = 'de',
}
