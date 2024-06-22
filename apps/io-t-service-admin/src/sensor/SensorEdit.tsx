import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DataStreamTitle } from "../dataStream/DataStreamTitle";
import { DeviceTitle } from "../device/DeviceTitle";

export const SensorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="dataStreams"
          reference="DataStream"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DataStreamTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="device.id" reference="Device" label="device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <TextInput label="model" source="model" />
      </SimpleForm>
    </Edit>
  );
};
