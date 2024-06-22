import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { SensorList } from "./sensor/SensorList";
import { SensorCreate } from "./sensor/SensorCreate";
import { SensorEdit } from "./sensor/SensorEdit";
import { SensorShow } from "./sensor/SensorShow";
import { RuleEngineList } from "./ruleEngine/RuleEngineList";
import { RuleEngineCreate } from "./ruleEngine/RuleEngineCreate";
import { RuleEngineEdit } from "./ruleEngine/RuleEngineEdit";
import { RuleEngineShow } from "./ruleEngine/RuleEngineShow";
import { DataStreamList } from "./dataStream/DataStreamList";
import { DataStreamCreate } from "./dataStream/DataStreamCreate";
import { DataStreamEdit } from "./dataStream/DataStreamEdit";
import { DataStreamShow } from "./dataStream/DataStreamShow";
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
        title={"IoT Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
        <Resource
          name="Sensor"
          list={SensorList}
          edit={SensorEdit}
          create={SensorCreate}
          show={SensorShow}
        />
        <Resource
          name="RuleEngine"
          list={RuleEngineList}
          edit={RuleEngineEdit}
          create={RuleEngineCreate}
          show={RuleEngineShow}
        />
        <Resource
          name="DataStream"
          list={DataStreamList}
          edit={DataStreamEdit}
          create={DataStreamCreate}
          show={DataStreamShow}
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
