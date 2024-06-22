import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEVICE_TITLE_FIELD } from "../device/DeviceTitle";

export const SensorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sensors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="device" source="device.id" reference="Device">
          <TextField source={DEVICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="model" source="model" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
