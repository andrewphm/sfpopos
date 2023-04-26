import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <section id="signup" aria-labelledby="signup-heading">
      <h1 id="signup-heading">Sign up to our news letter</h1>
      <form className="signup-form__container" aria-labelledby="signup-heading">
        <label className="signup-form__label" htmlFor="name">
          Name
        </label>
        <input
          className="signup-form__input"
          type="text"
          aria-required="true"
          aria-label="Name"
          name="name"
          id="name"
        />
        <label className="signup-form__label" htmlFor="email">
          Email
        </label>
        <input
          className="signup-form__input"
          type="email"
          aria-required="true"
          aria-label="Email"
          name="email"
          id="email"
        />
        <button className="signup-form__button" type="submit" aria-label="Sign up">
          Sign up
        </button>
      </form>
    </section>
  );
}

export default Signup;
