import { Sensor } from "../sensor/Sensor";

export type DataStream = {
  createdAt: Date;
  id: string;
  sensor?: Sensor | null;
  timestamp: Date | null;
  updatedAt: Date;
  value: number | null;
};
