import React from "react";
import { useState } from "react"
import '../styles/Contact.css';

function Contact() {
  // usestate for front end purposes
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [messageSent, setMessageSent] = useState("");
  // form handler functions
  const handleNameInput = (e) => {
    setName(e.target.value);
    setNameError(false);
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  }

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  }

  // email validation using regex to check for whitespace
  const emailValidated = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  // form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let validated = true;

    // input validation checks otherwise throw the user an error

    if (name.length <= 5) {
      setNameError(true);
      validated = false;
      
    }

    if (!emailValidated(email)) {
      setEmailError(true);
      validated = false;
    }

    if (message.length < 150) {
      setMessageError(true);
      validated = false
    }
    // after vaildation log the form data and clear field inputs
    if (validated) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName("");
      setEmail("");
      setMessage("");
      setMessageSent(true);
    }
  }  

  return (
   <main className="contact-main">
      <h1 className="contact-title">Send Me A Message!</h1>
      <section className="form-section">
        <section className="form-wrapper">
          <form onSubmit={handleSubmit} noValidate className="contact-form">
            <fieldset className="contact-field box-shadow-form">
              <legend className="contact-legend">Contact Form</legend>

              {messageSent && (
                <div className="alert message-sent" role="alert">
                  message sent
                </div>
              )}

              <input
              name="name"
              type="text"
              value={name}
              onChange={handleNameInput}
              placeholder="enter your name"
              className={nameError ? "is-invalid" : ""}
              required 
              />
              {nameError && (
                <div className="throw-error">
                  name must be more than 5 characters
                </div>
              )}

              <input
              name="email"
              type="email"
              value={email}
              onChange={handleEmailInput}
              placeholder="enter your email address"
              className={emailError ? "is-invalid" : ""}
              required
              />

              {emailError && (
                <div className="throw-error">
                  you must enter a valid email address
                </div>
              )}

              <textarea
                name="message"
                type="text"
                value={message}
                onChange={handleMessageInput}
                rows="10"
                style={{ resize: "none" }}
                id="contact-textarea"
                className={messageError ? "is-invalid" : ""}
                placeholder="enter your message"
              ></textarea>

              {messageError && (
                <div className="throw-error">
                  message has to be atleast 150 characters
                </div>
              )}

              <button type="submit" className="contact-form-button">Send Message</button>

            </fieldset>
          </form>


        </section>
      </section>
      <section className="email-wrapper">
          <h1 className="email-box box-shadow-email">Email: matthewmoraga90@gmail.com</h1>

      </section>
    </main>
  )
}

export default Contact;