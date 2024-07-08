import { FavoriteCarpark } from "../favoriteCarpark/FavoriteCarpark";

export type Carpark = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  carParkNo: string | null;
  address: string | null;
  xCoord: number | null;
  yCoord: number | null;
  carParkType: string | null;
  typeOfParkingSystem: string | null;
  shortTermParking: string | null;
  nightParking: string | null;
  carParkDecks: number | null;
  gantryHeight: number | null;
  hasBasement: boolean | null;
  freeParking: string | null;
  favoriteCarparks?: Array<FavoriteCarpark>;
};
