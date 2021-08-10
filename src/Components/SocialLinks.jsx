import React from "react";

export default function SocialLinks() {
  const links = {
    linkedIn: "https://www.linkedin.com/in/suraj-thapliyal-56ba10190/",
    github: "https://github.com/surajthapliyal",
    gmail: "surajthapliyal18@gmail.com",
  };
  return (
    <div className="social-links">
      <a href={links.github} className="github" target="_blank">
        <i className="fab fa-github"></i>
      </a>
      <a href={links.linkedIn} className="linkedin" target="_blank">
        <i className="fab fa-linkedin" />
      </a>
      <a href={links.gmail} className="gmail" target="_blank">
        <i class="fab fa-google"></i>
      </a>
    </div>
  );
}
