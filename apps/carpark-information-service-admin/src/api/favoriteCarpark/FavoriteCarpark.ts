import { User } from "../user/User";
import { Carpark } from "../carpark/Carpark";

export type FavoriteCarpark = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  carpark?: Carpark | null;
};
