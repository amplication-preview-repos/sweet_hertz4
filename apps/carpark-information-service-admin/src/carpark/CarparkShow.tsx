import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CARPARK_TITLE_FIELD } from "./CarparkTitle";

export const CarparkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="carParkNo" source="carParkNo" />
        <TextField label="address" source="address" />
        <TextField label="xCoord" source="xCoord" />
        <TextField label="yCoord" source="yCoord" />
        <TextField label="carParkType" source="carParkType" />
        <TextField label="typeOfParkingSystem" source="typeOfParkingSystem" />
        <TextField label="shortTermParking" source="shortTermParking" />
        <TextField label="nightParking" source="nightParking" />
        <TextField label="carParkDecks" source="carParkDecks" />
        <TextField label="gantryHeight" source="gantryHeight" />
        <BooleanField label="hasBasement" source="hasBasement" />
        <TextField label="freeParking" source="freeParking" />
        <ReferenceManyField
          reference="FavoriteCarpark"
          target="carparkId"
          label="FavoriteCarparks"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Carpark"
              source="carpark.id"
              reference="Carpark"
            >
              <TextField source={CARPARK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
