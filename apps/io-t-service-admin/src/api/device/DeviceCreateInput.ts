import { RuleEngineCreateNestedManyWithoutDevicesInput } from "./RuleEngineCreateNestedManyWithoutDevicesInput";
import { SensorCreateNestedManyWithoutDevicesInput } from "./SensorCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  name?: string | null;
  ruleEngines?: RuleEngineCreateNestedManyWithoutDevicesInput;
  sensors?: SensorCreateNestedManyWithoutDevicesInput;
  status?: "Option1" | null;
  typeField?: string | null;
};
