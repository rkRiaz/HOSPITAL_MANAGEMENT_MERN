import React from 'react';
import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Admission from "./components/Admission";
import Bill from "./components/Bill";
import DashBoard from "./components/DashBoard";
import Invoice from "./components/Invoice";
import PathLab from "./components/PathLab";
import PatientSearch from "./components/PatientSearch";
import Prescription from "./components/Prescription";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admission" component={Admission} />
          <Route exact path="/bill" component={Bill} />
          <Route exact path="/dashBoard" component={DashBoard} />
          <Route exact path="/invoice" component={Invoice} />
          <Route exact path="/pathLab" component={PathLab} />
          <Route exact path="/patientSearch" component={PatientSearch} />
          <Route exact path="/prescription" component={Prescription} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
