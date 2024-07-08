import { Module } from "@nestjs/common";
import { ImportModuleService } from "./importmodule.service";
import { ImportModuleController } from "./importmodule.controller";
import { ImportModuleResolver } from "./importmodule.resolver";

@Module({
  controllers: [ImportModuleController],
  providers: [ImportModuleService, ImportModuleResolver],
  exports: [ImportModuleService],
})
export class ImportModuleModule {}
