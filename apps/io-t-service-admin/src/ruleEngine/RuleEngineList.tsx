import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEVICE_TITLE_FIELD } from "../device/DeviceTitle";

export const RuleEngineList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RuleEngines"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="action" source="action" />
        <TextField label="condition" source="condition" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="device" source="device.id" reference="Device">
          <TextField source={DEVICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="ruleName" source="ruleName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
