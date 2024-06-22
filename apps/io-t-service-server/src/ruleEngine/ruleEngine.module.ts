import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RuleEngineModuleBase } from "./base/ruleEngine.module.base";
import { RuleEngineService } from "./ruleEngine.service";
import { RuleEngineController } from "./ruleEngine.controller";
import { RuleEngineResolver } from "./ruleEngine.resolver";

@Module({
  imports: [RuleEngineModuleBase, forwardRef(() => AuthModule)],
  controllers: [RuleEngineController],
  providers: [RuleEngineService, RuleEngineResolver],
  exports: [RuleEngineService],
})
export class RuleEngineModule {}
