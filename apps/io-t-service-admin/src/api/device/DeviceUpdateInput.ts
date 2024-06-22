import { RuleEngineUpdateManyWithoutDevicesInput } from "./RuleEngineUpdateManyWithoutDevicesInput";
import { SensorUpdateManyWithoutDevicesInput } from "./SensorUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  name?: string | null;
  ruleEngines?: RuleEngineUpdateManyWithoutDevicesInput;
  sensors?: SensorUpdateManyWithoutDevicesInput;
  status?: "Option1" | null;
  typeField?: string | null;
};
