import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Form = ({ createAppointments }) => {

  const [appointment, setAppointment] = useState({
    Pet: '',
    Owner: '',
    Date: '',
    Time: '',
    Symptoms: ''
  });

  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  const { Pet, Owner, Date, Time, Symptoms } = appointment

  const submitAppointment = (e) => {
    e.preventDefault();
    if (Pet.trim() === '' || Owner.trim() === '' || Date.trim() === '' || Time.trim() === '' || Symptoms.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    appointment.id = uuidv4();
    createAppointments(appointment)
    setAppointment({
      Pet: '',
      Owner: '',
      Date: '',
      Time: '',
      Symptoms: ''
    })
  }


  return (
    <Fragment>
      <h2>Create Appointments</h2>

      {error ? <p className="alert-error">All fields are required</p> : null}

      <form
        onSubmit={submitAppointment}
      >
        <label>Pet Name</label>
        <input
          type="text"
          name="Pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={handleChange}
          value={Pet}
        />

        <label>Owner Name</label>
        <input
          type="text"
          name="Owner"
          className="u-full-width"
          placeholder="Pet Owner"
          onChange={handleChange}
          value={Owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="Date"
          className="u-full-width"
          onChange={handleChange}
          value={Date}
        />

        <label>Time</label>
        <input
          type="time"
          name="Time"
          className="u-full-width"
          onChange={handleChange}
          value={Time}
        />

        <label>Symptoms</label>
        <textarea
          name="Symptoms"
          className="u-full-width"
          onChange={handleChange}
          value={Symptoms}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >Add Appointment</button>
      </form>
    </Fragment>
  );
}

Form.propTypes = {
  createAppointments: PropTypes.func.isRequired
}

export default Form;