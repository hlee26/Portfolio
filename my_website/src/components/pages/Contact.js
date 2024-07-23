import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <img src='/images/henry.jpg' alt="Henry Lee" className="profile-photo" />
      <h1>Henry Lee</h1>
      <p>Feel free to reach out to me on any of the following platforms:</p>
      <div className="contact-icons">
        <a href="https://github.com/hlee26" target="_blank" rel="noopener noreferrer">
          <FaGithub size={70} />
        </a>
        <a href="https://linkedin.com/in/henryjlee21" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={70} />
        </a>
        <a href="mailto:hlee26@nd.edu">
          <FaEnvelope size={70} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
