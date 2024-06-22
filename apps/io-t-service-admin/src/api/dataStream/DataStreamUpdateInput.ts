import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type DataStreamUpdateInput = {
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
