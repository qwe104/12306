import { RuleEngine } from "../ruleEngine/RuleEngine";
import { Sensor } from "../sensor/Sensor";

export type Device = {
  createdAt: Date;
  id: string;
  name: string | null;
  ruleEngines?: Array<RuleEngine>;
  sensors?: Array<Sensor>;
  status?: "Option1" | null;
  typeField: string | null;
  updatedAt: Date;
};
