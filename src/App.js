import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import ListaPasturas from "./components/ListaPasturas";

const dataProvider = jsonServerProvider('http://localhost:1234/pastura');

const App = () => {
  return(
    <Admin dataProvider={dataProvider}>
      <Resource name="pastura" 
        list={ListaPasturas} 
      />
    </Admin>
  )
}

export default App;
