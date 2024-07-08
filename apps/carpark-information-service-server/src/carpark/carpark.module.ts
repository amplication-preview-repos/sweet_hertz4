import { Module } from "@nestjs/common";
import { CarparkModuleBase } from "./base/carpark.module.base";
import { CarparkService } from "./carpark.service";
import { CarparkController } from "./carpark.controller";
import { CarparkResolver } from "./carpark.resolver";

@Module({
  imports: [CarparkModuleBase],
  controllers: [CarparkController],
  providers: [CarparkService, CarparkResolver],
  exports: [CarparkService],
})
export class CarparkModule {}
