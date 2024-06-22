import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RuleEngineServiceBase } from "./base/ruleEngine.service.base";

@Injectable()
export class RuleEngineService extends RuleEngineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
