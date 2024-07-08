import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FavoriteCarparkListRelationFilter } from "../favoriteCarpark/FavoriteCarparkListRelationFilter";

export type CarparkWhereInput = {
  id?: StringFilter;
  carParkNo?: StringNullableFilter;
  address?: StringNullableFilter;
  xCoord?: FloatNullableFilter;
  yCoord?: FloatNullableFilter;
  carParkType?: StringNullableFilter;
  typeOfParkingSystem?: StringNullableFilter;
  shortTermParking?: StringNullableFilter;
  nightParking?: StringNullableFilter;
  carParkDecks?: IntNullableFilter;
  gantryHeight?: FloatNullableFilter;
  hasBasement?: BooleanNullableFilter;
  freeParking?: StringNullableFilter;
  favoriteCarparks?: FavoriteCarparkListRelationFilter;
};
