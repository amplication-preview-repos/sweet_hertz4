import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FavoriteCarparkListRelationFilter } from "../favoriteCarpark/FavoriteCarparkListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  favoriteCarparks?: FavoriteCarparkListRelationFilter;
};
