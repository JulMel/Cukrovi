export type Cukrovi = {
  id: number;
  type: "suche" | "kremove";
  image: string;
  name: string;
  preparation: number;
  ingredients: string;
  cream?: string;
  recipe: string;
};
