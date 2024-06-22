import { RuleEngine as TRuleEngine } from "../api/ruleEngine/RuleEngine";

export const RULEENGINE_TITLE_FIELD = "ruleName";

export const RuleEngineTitle = (record: TRuleEngine): string => {
  return record.ruleName?.toString() || String(record.id);
};
