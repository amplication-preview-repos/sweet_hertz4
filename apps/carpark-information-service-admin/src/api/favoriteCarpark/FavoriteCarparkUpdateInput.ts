import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CarparkWhereUniqueInput } from "../carpark/CarparkWhereUniqueInput";

export type FavoriteCarparkUpdateInput = {
  user?: UserWhereUniqueInput | null;
  carpark?: CarparkWhereUniqueInput | null;
};
