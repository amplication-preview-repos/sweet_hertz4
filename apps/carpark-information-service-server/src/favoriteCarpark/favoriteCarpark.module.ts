import { Module } from "@nestjs/common";
import { FavoriteCarparkModuleBase } from "./base/favoriteCarpark.module.base";
import { FavoriteCarparkService } from "./favoriteCarpark.service";
import { FavoriteCarparkController } from "./favoriteCarpark.controller";
import { FavoriteCarparkResolver } from "./favoriteCarpark.resolver";

@Module({
  imports: [FavoriteCarparkModuleBase],
  controllers: [FavoriteCarparkController],
  providers: [FavoriteCarparkService, FavoriteCarparkResolver],
  exports: [FavoriteCarparkService],
})
export class FavoriteCarparkModule {}
