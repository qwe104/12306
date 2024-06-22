import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DEVICE_TITLE_FIELD } from "../device/DeviceTitle";

export const RuleEngineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="action" source="action" />
        <TextField label="condition" source="condition" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="device" source="device.id" reference="Device">
          <TextField source={DEVICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="ruleName" source="ruleName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
