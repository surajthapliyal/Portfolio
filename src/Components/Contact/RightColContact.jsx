import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import validator from "validator";
import Input from "./Input";

export default function RightColContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    emailjs
      .sendForm(
        "service_p23mflm",
        "template_twe08nn",
        e.target,
        "user_N3nhJMLLwtmY7tacgPvNm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("email send successfully");
    handleReset();
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleReset = (e) => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    validate(true);
  };
  const validate = (isTrue) => {
    if (isTrue) {
      setEmailError("");
      return true;
    }

    const res = validator.isEmail(email);
    if (!res) setEmailError("Invalid Email");
    return res;
  };
  return (
    <div className="rightCol">
      <form onSubmit={sendEmail}>
        <p className="para2">
          If you have other request or question, don’t hesitate to use the form.
        </p>
        <Input
          name="name"
          text="Name: *"
          required="true"
          placeholder="Name"
          ref={nameRef}
          value={name}
          onChange={handleNameChange}
        />
        <Input
          name="email"
          text="Email: *"
          required="true"
          placeholder="Email"
          ref={emailRef}
          value={email}
          onChange={handleEmailChange}
        />
        <div className="emailError">{emailError}</div>
        <Input
          name="subject"
          text="Subject: *"
          required="false"
          placeholder="Email Subject"
          value={subject}
          onChange={handleSubjectChange}
        />
        {/* <label htmlFor="Message">Message: *</label> */}
        <textarea
          name="message"
          autoComplete="off"
          cols="20"
          rows="8"
          required="true"
          ref={messageRef}
          value={message}
          onChange={handleMessageChange}
          placeholder="Write your message here"
        ></textarea>
        <div className="form-buttons">
          <button type="submit">SEND</button>
          <button type="reset" onClick={handleReset}>
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}
