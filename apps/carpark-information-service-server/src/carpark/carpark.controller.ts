import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarparkService } from "./carpark.service";
import { CarparkControllerBase } from "./base/carpark.controller.base";

@swagger.ApiTags("carparks")
@common.Controller("carparks")
export class CarparkController extends CarparkControllerBase {
  constructor(protected readonly service: CarparkService) {
    super(service);
  }
}
