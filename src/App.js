import React from 'react';
import "./App.css";
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom'
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

import AddAppoinment from './components/appoinments/AddAppoinment';
import AllAppoinments from './components/appoinments/AllAppoinments';
import EditAppoinment from './components/appoinments/EditAppoinment';
import DetailsAppoinment from './components/appoinments/DetailsAppoinment';

import AddRoomAllotment from './components/roomAllotments/AddRoomAllotment';
import AllRooms from './components/roomAllotments/AllRooms'
import AddRoom from './components/roomAllotments/AddRoom'
import EditRoomAllotment from './components/roomAllotments/EditRoomAllotment'



function App() {
  return (
    <div className="app">
      {
        false ?
         <h1>Login</h1>
        :
        <div className="app__body">
        <HashRouter>
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

                    <Route exact path="/addAppoinment" component={AddAppoinment}/>
                    <Route exact path="/allAppoinments" component={AllAppoinments}/>
                    <Route exact path="/editAppoinment/:appoinmentId" component={EditAppoinment}/>
                    <Route exact path="/detailsAppoinment/:appoinmentId" component={DetailsAppoinment}/>

                    <Route exact path="/addRoomAllotment" component={AddRoomAllotment}/>
                    <Route exact path="/allRooms" component={AllRooms}/>
                    <Route exact path="/addRoom" component={AddRoom}/>
                    <Route exact path="/editRoomAllotment/:appoinmentId" component={EditRoomAllotment}/>

                </Switch>
              </div>
          </HashRouter>
      </div> 
      }
    </div>
  );
}

export default App;
