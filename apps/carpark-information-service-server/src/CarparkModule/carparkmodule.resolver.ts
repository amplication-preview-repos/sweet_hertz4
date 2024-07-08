import * as graphql from "@nestjs/graphql";
import { FavoriteCarparkDto } from "../carparkModule/FavoriteCarparkDto";
import { CarparkFilterDto } from "../carparkModule/CarparkFilterDto";
import { CarparkOutputDto } from "../carparkModule/CarparkOutputDto";
import { CarparkModuleService } from "./carparkmodule.service";

export class CarparkModuleResolver {
  constructor(protected readonly service: CarparkModuleService) {}

  @graphql.Mutation(() => Boolean)
  async AddFavoriteCarpark(
    @graphql.Args()
    args: FavoriteCarparkDto
  ): Promise<boolean> {
    return this.service.AddFavoriteCarpark(args);
  }

  @graphql.Query(() => [CarparkOutputDto])
  async FilterCarparks(
    @graphql.Args()
    args: CarparkFilterDto
  ): Promise<CarparkOutputDto[]> {
    return this.service.FilterCarparks(args);
  }
}
