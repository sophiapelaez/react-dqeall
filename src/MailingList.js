import React from 'react';
import { useState } from 'react';

export default function MailingList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [favesie, setFavesie] = useState('');

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log('handleOnSubmit');

    var errorMessages = '';

    if (email.length == 0) {
      errorMessages += 'Email must be provided. \n';
    } else if (email.indexOf('@') == -1) {
      errorMessages += 'Email must contain @ character.\n';
    }

    if (firstName.length == 0) {
      errorMessages += 'First name must be. \n';
    }

    if (lastName.length == 0) {
      errorMessages += 'Last name must be. \n';
    }

    if (favesie.length == 0) {
      errorMessages += 'You gotta fill out this last one out too. \n';
    } else if (favesie.indexOf('Haechan') == 0) {
      alert('Omg we have the same fave #Real_Recognizes_Real');
    }

    if (errorMessages.length > 0) {
      alert(errorMessages);
    } else {
      alert('Thank you for signing up!');
    }
  }

  function handleOnChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    if (event.target.name == 'firstName') {
      setFirstName(event.target.value);
    } else if (event.target.name == 'lastName') {
      setLastName(event.target.value);
    } else if (event.target.name == 'email') {
      setEmail(event.target.value);
    } else if (event.target.name == 'favesie') {
      setFavesie(event.target.value);
    }
  }
  return (
    <form id="signup-form" onSubmit={handleOnSubmit}>
      <div className="email">
        <span id="text"> Email: </span>
        <input
          onChange={handleOnChange}
          type="email"
          name="email"
          className="form-control"
          placeholder="nctenjoyer@yahoo.com"
          id="email"
          value={email}
        />
      </div>
      <div className="firstName">
        <span id="text"> First Name: </span>
        <input
          onChange={handleOnChange}
          type="firstName"
          name="firstName"
          className="form-control"
          placeholder="Sue"
          id="firstName"
          value={firstName}
        />
      </div>
      <div className="lastName">
        <span id="text"> Last Name: </span>
        <input
          onChange={handleOnChange}
          type="lastName"
          name="lastName"
          className="form-control"
          placeholder="Sylvester"
          id="lastName"
          value={lastName}
        />
      </div>
      <div className="favesie">
        <span id="text"> Favesie: </span>
        <input
          onChange={handleOnChange}
          type="favesie"
          name="favesie"
          className="form-control"
          placeholder="Haechan"
          id="favesie"
          value={favesie}
        />
      </div>
      <button id="submit" type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
