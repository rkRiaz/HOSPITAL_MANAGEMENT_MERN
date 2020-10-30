import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
      <div className="home">
        <div className="home__sideBar">
          <Link to="/admission">Admission</Link>
          <Link to="/bill">Bill</Link>
          <Link to="/dashBoard">DashBoard</Link>
          <Link to="/invoice">Invoice</Link>
          <Link to="/pathLab">PathLab</Link>
          <Link to="/patientSearch">PatientSearch</Link>
          <Link to="/prescription">Prescription</Link>
        </div>
        <div className="home__details">
          asdasdd
        </div>
      </div>
    );
}

export default Home
