import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RuleEngineService } from "./ruleEngine.service";
import { RuleEngineControllerBase } from "./base/ruleEngine.controller.base";

@swagger.ApiTags("ruleEngines")
@common.Controller("ruleEngines")
export class RuleEngineController extends RuleEngineControllerBase {
  constructor(
    protected readonly service: RuleEngineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
