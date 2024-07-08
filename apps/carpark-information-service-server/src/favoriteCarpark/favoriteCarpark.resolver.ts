import * as graphql from "@nestjs/graphql";
import { FavoriteCarparkResolverBase } from "./base/favoriteCarpark.resolver.base";
import { FavoriteCarpark } from "./base/FavoriteCarpark";
import { FavoriteCarparkService } from "./favoriteCarpark.service";

@graphql.Resolver(() => FavoriteCarpark)
export class FavoriteCarparkResolver extends FavoriteCarparkResolverBase {
  constructor(protected readonly service: FavoriteCarparkService) {
    super(service);
  }
}
