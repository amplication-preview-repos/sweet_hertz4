import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ImportModuleService } from "./importmodule.service";

@swagger.ApiTags("importModules")
@common.Controller("importModules")
export class ImportModuleController {
  constructor(protected readonly service: ImportModuleService) {}

  @common.Post("/import")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ImportCarparkData(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.ImportCarparkData(body);
      }
}
