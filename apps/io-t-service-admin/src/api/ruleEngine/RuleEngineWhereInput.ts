import { JsonFilter } from "../../util/JsonFilter";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RuleEngineWhereInput = {
  action?: JsonFilter;
  condition?: JsonFilter;
  device?: DeviceWhereUniqueInput;
  id?: StringFilter;
  ruleName?: StringNullableFilter;
};
