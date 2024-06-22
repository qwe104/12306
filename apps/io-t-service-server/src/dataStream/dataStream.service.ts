import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataStreamServiceBase } from "./base/dataStream.service.base";

@Injectable()
export class DataStreamService extends DataStreamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
