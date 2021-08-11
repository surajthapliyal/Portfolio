import React from "react";
import LeftColContact from "./LeftColContact";
import RightColContact from "./RightColContact";
import "./Contact.css";
import { Fade } from 'react-reveal';

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="hero-container">
        <LeftColContact />
        <RightColContact />
      </div>
    </Fade>
  );
}
