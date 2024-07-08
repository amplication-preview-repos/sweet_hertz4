import * as graphql from "@nestjs/graphql";
import { CarparkResolverBase } from "./base/carpark.resolver.base";
import { Carpark } from "./base/Carpark";
import { CarparkService } from "./carpark.service";

@graphql.Resolver(() => Carpark)
export class CarparkResolver extends CarparkResolverBase {
  constructor(protected readonly service: CarparkService) {
    super(service);
  }
}
