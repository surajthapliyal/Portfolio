import React from "react";

export default function RightColContact() {
  return (
    <div className="rightCol">
      <form>
        <p className="para2">
          If you have other request or question,
          don’t hesitate to use the form.
        </p>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" placeholder="Name" autocomplete="off" />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          autocomplete="off"
        />
        <label htmlFor="Message">Message: </label>
        <textarea
          name="message"
          autocomplete="off"
          cols="20"
          rows="8"
          placeholder="Write your message here"
        ></textarea>
        <div className="form-buttons">
          <button>SEND</button>
          <button>RESET</button>
        </div>
      </form>
    </div>
  );
}
