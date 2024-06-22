import { DataStream as TDataStream } from "../api/dataStream/DataStream";

export const DATASTREAM_TITLE_FIELD = "id";

export const DataStreamTitle = (record: TDataStream): string => {
  return record.id?.toString() || String(record.id);
};
