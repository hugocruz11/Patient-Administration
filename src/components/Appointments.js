import React from 'react';
import PropTypes from 'prop-types'

const Appointment = ({ appointment, deleteAppointments }) => (
  <div className="appointment">
    <p>Pet: <span>{appointment.Pet}</span></p>
    <p>Owner: <span>{appointment.Owner}</span></p>
    <p>Date: <span>{appointment.Date}</span></p>
    <p>Time: <span>{appointment.Time}</span></p>
    <p>Symptoms: <span>{appointment.Symptoms}</span></p>

    <button
      onClick={() => { deleteAppointments(appointment.id) }}
      className="button delete u-full-width"
    > Delete &times;
    </button>
  </div>
)

Appointment.propTypes = {
  appointment: PropTypes.object,
  deleteAppointments: PropTypes.func
}.isRequired

export default Appointment;