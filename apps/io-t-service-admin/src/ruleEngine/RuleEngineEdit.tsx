import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DeviceTitle } from "../device/DeviceTitle";

export const RuleEngineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <ReferenceInput source="device.id" reference="Device" label="device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <TextInput label="ruleName" source="ruleName" />
      </SimpleForm>
    </Edit>
  );
};
