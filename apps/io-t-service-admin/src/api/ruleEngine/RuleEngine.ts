import { JsonValue } from "type-fest";
import { Device } from "../device/Device";

export type RuleEngine = {
  action: JsonValue;
  condition: JsonValue;
  createdAt: Date;
  device?: Device | null;
  id: string;
  ruleName: string | null;
  updatedAt: Date;
};
