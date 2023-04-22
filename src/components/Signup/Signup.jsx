import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <section id="signup">
      <h1>Sign up to our news letter</h1>
      <form className="signup-form__container">
        <label className="signup-form__label" htmlFor="name">
          Name
        </label>
        <input className="signup-form__input" type="text" name="name" id="name" />
        <label className="signup-form__label" htmlFor="email">
          Email
        </label>
        <input className="signup-form__input" type="email" name="email" id="email" />
        <button className="signup-form__button" type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
}

export default Signup;
