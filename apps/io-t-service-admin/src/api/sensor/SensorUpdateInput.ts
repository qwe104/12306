import { DataStreamUpdateManyWithoutSensorsInput } from "./DataStreamUpdateManyWithoutSensorsInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type SensorUpdateInput = {
  dataStreams?: DataStreamUpdateManyWithoutSensorsInput;
  description?: string | null;
  device?: DeviceWhereUniqueInput | null;
  model?: string | null;
};
