import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RuleEngineListRelationFilter } from "../ruleEngine/RuleEngineListRelationFilter";
import { SensorListRelationFilter } from "../sensor/SensorListRelationFilter";

export type DeviceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  ruleEngines?: RuleEngineListRelationFilter;
  sensors?: SensorListRelationFilter;
  status?: "Option1";
  typeField?: StringNullableFilter;
};
