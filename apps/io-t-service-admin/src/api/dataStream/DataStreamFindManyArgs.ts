import { DataStreamWhereInput } from "./DataStreamWhereInput";
import { DataStreamOrderByInput } from "./DataStreamOrderByInput";

export type DataStreamFindManyArgs = {
  where?: DataStreamWhereInput;
  orderBy?: Array<DataStreamOrderByInput>;
  skip?: number;
  take?: number;
};
