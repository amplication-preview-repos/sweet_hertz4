import * as graphql from "@nestjs/graphql";
import { ImportModuleService } from "./importmodule.service";

export class ImportModuleResolver {
  constructor(protected readonly service: ImportModuleService) {}

  @graphql.Mutation(() => Boolean)
  async ImportCarparkData(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.ImportCarparkData(args);
  }
}
