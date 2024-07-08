import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { CarparkTitle } from "../carpark/CarparkTitle";

export const FavoriteCarparkCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="carpark.id" reference="Carpark" label="Carpark">
          <SelectInput optionText={CarparkTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
