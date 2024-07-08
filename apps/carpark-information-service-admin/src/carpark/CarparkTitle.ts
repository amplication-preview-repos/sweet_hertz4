import { Carpark as TCarpark } from "../api/carpark/Carpark";

export const CARPARK_TITLE_FIELD = "carParkNo";

export const CarparkTitle = (record: TCarpark): string => {
  return record.carParkNo?.toString() || String(record.id);
};
