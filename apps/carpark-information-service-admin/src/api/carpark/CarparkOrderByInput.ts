import { SortOrder } from "../../util/SortOrder";

export type CarparkOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  carParkNo?: SortOrder;
  address?: SortOrder;
  xCoord?: SortOrder;
  yCoord?: SortOrder;
  carParkType?: SortOrder;
  typeOfParkingSystem?: SortOrder;
  shortTermParking?: SortOrder;
  nightParking?: SortOrder;
  carParkDecks?: SortOrder;
  gantryHeight?: SortOrder;
  hasBasement?: SortOrder;
  freeParking?: SortOrder;
};
