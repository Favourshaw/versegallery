import React from "react";
import "../assets/contact.css";
import { EmailFrom } from "./EmailForm";

const ContactUs = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div class="form-container">
          <EmailFrom />
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
