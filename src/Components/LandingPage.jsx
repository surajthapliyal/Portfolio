import React from "react";
import LeftCol from "./LeftCol";
import RightCol from "./RightCol";
import { Fade } from "react-reveal";

export default function LandingPage() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="hero-container">
        <LeftCol />
        <RightCol />
      </div>
    </Fade>
  );
}
