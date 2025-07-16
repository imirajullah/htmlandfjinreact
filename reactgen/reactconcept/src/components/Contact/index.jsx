import React from "react";
import "./style.css";
import profile from "../../img/profile.jpg"; // ✅ Using it below

function Contact() {
  return (
    <div className="contact-file">
      <img src={profile} alt="Profile" className="profile" />
      <h1>Miraj</h1>
      <p>03025726323</p>
      <p>mirajullah95@gmail.com</p>
    </div>
  );
}

export default Contact;
