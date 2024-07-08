import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FavoriteCarparkService } from "./favoriteCarpark.service";
import { FavoriteCarparkControllerBase } from "./base/favoriteCarpark.controller.base";

@swagger.ApiTags("favoriteCarparks")
@common.Controller("favoriteCarparks")
export class FavoriteCarparkController extends FavoriteCarparkControllerBase {
  constructor(protected readonly service: FavoriteCarparkService) {
    super(service);
  }
}
