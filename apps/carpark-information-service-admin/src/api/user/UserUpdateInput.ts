import { InputJsonValue } from "../../types";
import { FavoriteCarparkUpdateManyWithoutUsersInput } from "./FavoriteCarparkUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  favoriteCarparks?: FavoriteCarparkUpdateManyWithoutUsersInput;
};
