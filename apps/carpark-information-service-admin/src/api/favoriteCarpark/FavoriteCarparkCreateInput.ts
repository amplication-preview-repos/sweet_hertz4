import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CarparkWhereUniqueInput } from "../carpark/CarparkWhereUniqueInput";

export type FavoriteCarparkCreateInput = {
  user?: UserWhereUniqueInput | null;
  carpark?: CarparkWhereUniqueInput | null;
};
