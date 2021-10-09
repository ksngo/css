import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./page/Home.js";
import DisplayTable from "./page/DisplayTable.js";
import Again from "./page/Again.js";
import Float from "./page/Float.js";
import AttributeSelectors from "./page/AttributeSelectors";
import Grids from "./page/Grids";
import Position from "./page/Position";
import Background from "./page/Background";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/grids" strict>
          <Grids />
        </Route>
        <Route path="/attributeSelectors" strict>
          <AttributeSelectors />
        </Route>
        <Route path="/displaytable" strict>
          <DisplayTable />
        </Route>
        <Route path="/again" strict>
          <Again />
        </Route>
        <Route path="/float" strict>
          <Float />
        </Route>
        <Route path="/position" strict>
          <Position />
        </Route>
        <Route path="/background" strict>
          <Background />
        </Route>
        <Route path="/" component={Home} strict />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
