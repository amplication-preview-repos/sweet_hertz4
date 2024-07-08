import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CarparkModuleService } from "./carparkmodule.service";
import { CarparkFilterDto } from "../carparkModule/CarparkFilterDto";
import { CarparkOutputDto } from "../carparkModule/CarparkOutputDto";

@swagger.ApiTags("carparkModules")
@common.Controller("carparkModules")
export class CarparkModuleController {
  constructor(protected readonly service: CarparkModuleService) {}

  @common.Post("/favorite")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddFavoriteCarpark(
    @common.Body()
    body: CarparkFilterDto
  ): Promise<boolean> {
        return this.service.AddFavoriteCarpark(body);
      }

  @common.Get("/carparks")
  @swagger.ApiOkResponse({
    type: CarparkOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FilterCarparks(
    @common.Body()
    body: CarparkFilterDto
  ): Promise<CarparkOutputDto[]> {
        return this.service.FilterCarparks(body);
      }
}
