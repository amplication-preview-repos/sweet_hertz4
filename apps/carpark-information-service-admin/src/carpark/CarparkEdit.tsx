import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FavoriteCarparkTitle } from "../favoriteCarpark/FavoriteCarparkTitle";

export const CarparkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="carParkNo" source="carParkNo" />
        <TextInput label="address" multiline source="address" />
        <NumberInput label="xCoord" source="xCoord" />
        <NumberInput label="yCoord" source="yCoord" />
        <TextInput label="carParkType" source="carParkType" />
        <TextInput label="typeOfParkingSystem" source="typeOfParkingSystem" />
        <TextInput label="shortTermParking" source="shortTermParking" />
        <TextInput label="nightParking" source="nightParking" />
        <NumberInput step={1} label="carParkDecks" source="carParkDecks" />
        <NumberInput label="gantryHeight" source="gantryHeight" />
        <BooleanInput label="hasBasement" source="hasBasement" />
        <TextInput label="freeParking" source="freeParking" />
        <ReferenceArrayInput
          source="favoriteCarparks"
          reference="FavoriteCarpark"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteCarparkTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
