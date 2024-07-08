import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavoriteCarparkServiceBase } from "./base/favoriteCarpark.service.base";

@Injectable()
export class FavoriteCarparkService extends FavoriteCarparkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
