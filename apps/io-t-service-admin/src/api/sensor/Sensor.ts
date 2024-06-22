import { DataStream } from "../dataStream/DataStream";
import { Device } from "../device/Device";

export type Sensor = {
  createdAt: Date;
  dataStreams?: Array<DataStream>;
  description: string | null;
  device?: Device | null;
  id: string;
  model: string | null;
  updatedAt: Date;
};
