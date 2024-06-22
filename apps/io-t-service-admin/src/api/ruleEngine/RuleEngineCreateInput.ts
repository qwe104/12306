import { InputJsonValue } from "../../types";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type RuleEngineCreateInput = {
  action?: InputJsonValue;
  condition?: InputJsonValue;
  device?: DeviceWhereUniqueInput | null;
  ruleName?: string | null;
};
