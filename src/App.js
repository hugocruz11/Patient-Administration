import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form'
import Appointment from './components/Appointments'

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));

  if (!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, setAppointments] = useState(initialAppointments)

  const createAppointments = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ])
  }

  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments, initialAppointments]);

  const deleteAppointments = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(newAppointments)
  }

  const tittle = appointments.length === 0 ? 'No Appointments' : 'Manage your Appointments'

  return (
    <Fragment>
      <h1>Patient Administration</h1>
      <div className="Container">
        <div className="one-half column">
          <Form
            createAppointments={createAppointments}
          />
        </div>
        <div className="one-half column">
          <h2>{tittle}</h2>
          {appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointments={deleteAppointments}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
