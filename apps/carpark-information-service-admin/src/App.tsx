import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CarparkList } from "./carpark/CarparkList";
import { CarparkCreate } from "./carpark/CarparkCreate";
import { CarparkEdit } from "./carpark/CarparkEdit";
import { CarparkShow } from "./carpark/CarparkShow";
import { FavoriteCarparkList } from "./favoriteCarpark/FavoriteCarparkList";
import { FavoriteCarparkCreate } from "./favoriteCarpark/FavoriteCarparkCreate";
import { FavoriteCarparkEdit } from "./favoriteCarpark/FavoriteCarparkEdit";
import { FavoriteCarparkShow } from "./favoriteCarpark/FavoriteCarparkShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CarparkInformationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Carpark"
          list={CarparkList}
          edit={CarparkEdit}
          create={CarparkCreate}
          show={CarparkShow}
        />
        <Resource
          name="FavoriteCarpark"
          list={FavoriteCarparkList}
          edit={FavoriteCarparkEdit}
          create={FavoriteCarparkCreate}
          show={FavoriteCarparkShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
