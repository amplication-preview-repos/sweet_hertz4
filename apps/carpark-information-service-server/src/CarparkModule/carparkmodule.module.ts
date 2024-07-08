import { Module } from "@nestjs/common";
import { CarparkModuleService } from "./carparkmodule.service";
import { CarparkModuleController } from "./carparkmodule.controller";
import { CarparkModuleResolver } from "./carparkmodule.resolver";

@Module({
  controllers: [CarparkModuleController],
  providers: [CarparkModuleService, CarparkModuleResolver],
  exports: [CarparkModuleService],
})
export class CarparkModuleModule {}
