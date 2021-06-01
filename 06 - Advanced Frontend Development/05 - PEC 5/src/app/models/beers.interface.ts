export interface Beer {
  _id: number;
  name: string;
  subtitle: string;
  section: string;
  description: string;
  abv: number;
  imgURL: string;
  ingredients?: [];
  tastingNotes: {
    bitterness?: number;
    hoppyness?: number;
    maltyness?: number;
  };
  brewSheet: {
    hops?: [];
    malts?: [];
    colour?: number;
    style?: string;
  };
}
