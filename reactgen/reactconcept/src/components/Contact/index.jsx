import React from "react";
import "./style.css";
import profile from "../../img/profile.jpg"; // ✅ Using it below

function Contact() {
  return (
    <div className="contact-f">
        <div className="contact-o">
      <div className="contact-file">
        <img src={profile} alt="Profile" className="profile" />
        <h1>Miraj</h1>
        <p>03025726323</p>
        <p>mirajullah95@gmail.com</p>
      </div>

      <div className="contact-fil">
        <img src={profile} alt="Profile" className="profile" />
        <h1>Miraj</h1>
        <p>03025726323</p>
        <p>mirajullah95@gmail.com</p>
      </div>
      
      </div>
      <div className="contact-b">
       <div className="contact-fil">
        <img src={profile} alt="Profile" className="profile" />
        <h1>Miraj</h1>
        <p>03025726323</p>
        <p>mirajullah95@gmail.com</p>
      </div>
       <div className="contact-fil">
        <img src={profile} alt="Profile" className="profile" />
        <h1>Miraj</h1>
        <p>03025726323</p>
        <p>mirajullah95@gmail.com</p>
      </div>
      </div>
    </div> // ✅ This was fixed
  );
}   

export default Contact;

