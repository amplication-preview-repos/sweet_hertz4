import { FavoriteCarparkCreateNestedManyWithoutCarparksInput } from "./FavoriteCarparkCreateNestedManyWithoutCarparksInput";

export type CarparkCreateInput = {
  carParkNo?: string | null;
  address?: string | null;
  xCoord?: number | null;
  yCoord?: number | null;
  carParkType?: string | null;
  typeOfParkingSystem?: string | null;
  shortTermParking?: string | null;
  nightParking?: string | null;
  carParkDecks?: number | null;
  gantryHeight?: number | null;
  hasBasement?: boolean | null;
  freeParking?: string | null;
  favoriteCarparks?: FavoriteCarparkCreateNestedManyWithoutCarparksInput;
};
