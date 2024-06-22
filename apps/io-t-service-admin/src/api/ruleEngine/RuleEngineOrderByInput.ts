import { SortOrder } from "../../util/SortOrder";

export type RuleEngineOrderByInput = {
  action?: SortOrder;
  condition?: SortOrder;
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  id?: SortOrder;
  ruleName?: SortOrder;
  updatedAt?: SortOrder;
};
