
import './index.css'; // You can create this file for your styles


// react router import !!
import React, { useState } from 'react';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteParm from './RouteParm';
import Home from './Routes/Home';
import Profile from './Routes/Profile';
import BackDropAlertMessage from './Components/BackDropAlertMessage';
import Nurses from './Routes/Nurses';
import AddNurse from './Routes/AddNurse';
import Login from './Routes/Login';
import NotFound from './Routes/NotFound';
import Patients from './Routes/Patients';
import AddPatient from './Routes/AddPatient';
import PatientProfile from './Routes/PatientProfile';
import Consultations from './Routes/Consultations';
import ConsultationPage from './Routes/ConsultationPage';
import BasicPage from './Routes/BasicPage';
import AddConsultation from './Routes/AddConsultation';
import Appointments from './Routes/Appointments';
import AddAppointment from './Routes/AddAppointment';

// react function strart 
const App = () => {
  const [showBackDRropAlertMessage, setShowBackDRropAlertMessage] = useState(false);
  const [valueOfBackdrop, setValueOfBackdrop] = useState('')
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        {/* Main Routes */}
        <Route
          path='/'
          element={<RouteParm />}
        >
          <Route index element={<Home showBackDRropAlertMessage={showBackDRropAlertMessage}
            setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop} />} />
          <Route path='profile' element={<Profile />} />
          <Route path='nurse' element={<Nurses />} />
          <Route path='add-nurse' element={<AddNurse />} />
          <Route path='patient' element={<Patients />} />
          <Route path='consultations' element={<Consultations />} />
          <Route path='add-patient' element={<AddPatient />} />
          <Route path='patient-profile/:id' element={<PatientProfile setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop}/>} />
          <Route path='consultation/:id' element={<ConsultationPage setShowBackDRropAlertMessage={setShowBackDRropAlertMessage} setValueOfBackdrop={setValueOfBackdrop}/>} />
          <Route path='add-consultation/:id' element={<AddConsultation />} />
          <Route path='add-consultation' element={<AddConsultation />} />
          <Route path='add-appointment' element={<AddAppointment />} />
          <Route path='/appointments' element={<Appointments />} />
          
        </Route>
  
        {/* Separate Login Route */}
        <Route path='consultation-basic-page/:id' element={<BasicPage />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />}/>
      </React.Fragment>
    )
  );
  

  return (
    <div className="App">
      {showBackDRropAlertMessage && <BackDropAlertMessage valueOfBackdrop={valueOfBackdrop} setShowBackDRropAlertMessage={setShowBackDRropAlertMessage}  />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
