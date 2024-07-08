import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { CarparkTitle } from "../carpark/CarparkTitle";

export const FavoriteCarparkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="carpark.id" reference="Carpark" label="Carpark">
          <SelectInput optionText={CarparkTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
