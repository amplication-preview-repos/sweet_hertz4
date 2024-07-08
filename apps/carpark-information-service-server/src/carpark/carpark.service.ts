import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarparkServiceBase } from "./base/carpark.service.base";

@Injectable()
export class CarparkService extends CarparkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
