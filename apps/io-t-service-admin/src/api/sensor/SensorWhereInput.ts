import { DataStreamListRelationFilter } from "../dataStream/DataStreamListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SensorWhereInput = {
  dataStreams?: DataStreamListRelationFilter;
  description?: StringNullableFilter;
  device?: DeviceWhereUniqueInput;
  id?: StringFilter;
  model?: StringNullableFilter;
};
