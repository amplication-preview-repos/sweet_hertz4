import { JsonValue } from "type-fest";
import { FavoriteCarpark } from "../favoriteCarpark/FavoriteCarpark";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  favoriteCarparks?: Array<FavoriteCarpark>;
};
