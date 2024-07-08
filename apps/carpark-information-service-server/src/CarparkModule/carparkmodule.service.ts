import { Injectable } from "@nestjs/common";
import { FavoriteCarparkDto } from "../carparkModule/FavoriteCarparkDto";
import { CarparkFilterDto } from "../carparkModule/CarparkFilterDto";
import { CarparkOutputDto } from "../carparkModule/CarparkOutputDto";

@Injectable()
export class CarparkModuleService {
  constructor() {}
  async AddFavoriteCarpark(args: FavoriteCarparkDto): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async FilterCarparks(args: CarparkFilterDto): Promise<CarparkOutputDto[]> {
    throw new Error("Not implemented");
  }
}
