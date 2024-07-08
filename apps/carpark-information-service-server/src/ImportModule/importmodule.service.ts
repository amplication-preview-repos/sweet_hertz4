import { Injectable } from "@nestjs/common";

@Injectable()
export class ImportModuleService {
  constructor() {}
  async ImportCarparkData(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
