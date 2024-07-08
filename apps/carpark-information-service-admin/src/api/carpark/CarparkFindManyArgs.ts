import { CarparkWhereInput } from "./CarparkWhereInput";
import { CarparkOrderByInput } from "./CarparkOrderByInput";

export type CarparkFindManyArgs = {
  where?: CarparkWhereInput;
  orderBy?: Array<CarparkOrderByInput>;
  skip?: number;
  take?: number;
};
