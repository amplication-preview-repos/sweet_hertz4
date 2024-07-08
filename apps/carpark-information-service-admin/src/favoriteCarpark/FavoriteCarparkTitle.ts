import { FavoriteCarpark as TFavoriteCarpark } from "../api/favoriteCarpark/FavoriteCarpark";

export const FAVORITECARPARK_TITLE_FIELD = "id";

export const FavoriteCarparkTitle = (record: TFavoriteCarpark): string => {
  return record.id?.toString() || String(record.id);
};
