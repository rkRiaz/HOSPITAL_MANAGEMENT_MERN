import React from 'react';
import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import Dashboard from './components/Dashboard'
import AddDoctor from './components/doctors/AddDoctor'
import AllDoctors from './components/doctors/AllDoctors';
import EditDoctor from './components/doctors/EditDoctor';
import DetailsDoctor from './components/doctors/DetailsDoctor';
import AddPatient from './components/patients/AddPatient';
import AllPatients from './components/patients/AllPatients';
import EditPatient from './components/patients/EditPatient';
import DetailsPatient from './components/patients/DetailsPatient';



function App() {
  return (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
              <SideBar/>
              <div className="app__bodyRight">
                <TopBar/>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/addDoctor" component={AddDoctor}/>
                    <Route exact path="/allDoctors" component={AllDoctors}/>
                    <Route exact path="/editDoctor/:doctorId" component={EditDoctor}/>
                    <Route exact path="/detailsDoctor/:doctorId" component={DetailsDoctor}/>

                    <Route exact path="/addPatient" component={AddPatient}/>
                    <Route exact path="/allPatients" component={AllPatients}/>
                    <Route exact path="/editPatient/:patientId" component={EditPatient}/>
                    <Route exact path="/detailsPatient/:patientId" component={DetailsPatient}/>







                </Switch>
              </div>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
