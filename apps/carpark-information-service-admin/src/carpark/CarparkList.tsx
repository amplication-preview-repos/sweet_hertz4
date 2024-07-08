import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CarparkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Carparks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
