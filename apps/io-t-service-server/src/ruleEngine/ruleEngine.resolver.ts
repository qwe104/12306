import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RuleEngineResolverBase } from "./base/ruleEngine.resolver.base";
import { RuleEngine } from "./base/RuleEngine";
import { RuleEngineService } from "./ruleEngine.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RuleEngine)
export class RuleEngineResolver extends RuleEngineResolverBase {
  constructor(
    protected readonly service: RuleEngineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
