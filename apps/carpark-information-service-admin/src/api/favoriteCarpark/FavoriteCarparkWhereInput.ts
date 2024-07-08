import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CarparkWhereUniqueInput } from "../carpark/CarparkWhereUniqueInput";

export type FavoriteCarparkWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  carpark?: CarparkWhereUniqueInput;
};
