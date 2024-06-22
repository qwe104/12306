import { Sensor as TSensor } from "../api/sensor/Sensor";

export const SENSOR_TITLE_FIELD = "model";

export const SensorTitle = (record: TSensor): string => {
  return record.model?.toString() || String(record.id);
};
