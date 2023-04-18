import Navbar from "./Navbar"
import Dashboard from "./pages/Dashboard"
import Doctor from "./pages/Doctor"
import Home from "./pages/Home"
import RecordList from "./pages/RecordList"
import RegisterNewDoctor from "./pages/RegisterNewDoctor"
import RegisterPatientRecord from "./pages/RegisterPatientRecord"
import MakeAppointment from "./pages/MakeAppointment"

import { Route, Routes } from "react-router-dom"

function App ()
{
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/recordList" element={ <RecordList /> } />
          <Route path="/Doctor" element={ <Doctor /> } />
          <Route path="/recordList" element={ <RecordList /> } />
          <Route path="/registernewdoctor" element={ <RegisterNewDoctor /> } />
          <Route path="/RegisterPatientRecord" element={ <RegisterPatientRecord /> } />
          <Route path="/MakeAppointment" element={ <MakeAppointment /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
