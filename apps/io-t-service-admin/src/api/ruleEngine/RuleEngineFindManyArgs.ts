import { RuleEngineWhereInput } from "./RuleEngineWhereInput";
import { RuleEngineOrderByInput } from "./RuleEngineOrderByInput";

export type RuleEngineFindManyArgs = {
  where?: RuleEngineWhereInput;
  orderBy?: Array<RuleEngineOrderByInput>;
  skip?: number;
  take?: number;
};
