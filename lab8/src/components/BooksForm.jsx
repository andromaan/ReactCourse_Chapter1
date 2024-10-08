import React, { useState } from 'react';

function BooksForm({ firstName, onFirstNameChange, lastName, onLastNameChange, phone, onPhoneChange, onSubmit }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!firstName) formErrors.firstName = 'The first name is required';
    if (!lastName) formErrors.lastName = 'The last name is required';
    if (!phone) formErrors.phone = 'The phone is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      onSubmit(e);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <form id='booksForm' action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChange}
            name="firstName"
            placeholder="Add a first name"
            id="firstName"
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={onLastNameChange}
            name="lastName"
            placeholder="Add a last name"
            id="lastName"
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
        <div>
          <input
            type="text"
            value={phone}
            onChange={onPhoneChange}
            name="phone"
            placeholder="Add a phone"
            id="phone"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default BooksForm;
