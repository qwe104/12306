import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type DataStreamCreateInput = {
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
