import { DataStreamCreateNestedManyWithoutSensorsInput } from "./DataStreamCreateNestedManyWithoutSensorsInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type SensorCreateInput = {
  dataStreams?: DataStreamCreateNestedManyWithoutSensorsInput;
  description?: string | null;
  device?: DeviceWhereUniqueInput | null;
  model?: string | null;
};
