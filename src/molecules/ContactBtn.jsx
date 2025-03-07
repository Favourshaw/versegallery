import React, { useState } from "react";
import ContactUs from "./ContactForm";

function ContactBtn() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ContactUs isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="btn">
        <button onClick={() => setIsOpen(true)} class="contactbtn">
          <div class="wrapper">
            <span>Contact Us</span>
            <div class="circle circle-12"></div>
            <div class="circle circle-11"></div>
            <div class="circle circle-10"></div>
            <div class="circle circle-9"></div>
            <div class="circle circle-8"></div>
            <div class="circle circle-7"></div>
            <div class="circle circle-6"></div>
            <div class="circle circle-5"></div>
            <div class="circle circle-4"></div>
            <div class="circle circle-3"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-1"></div>
          </div>
        </button>
      </div>
    </>
  );
}

export default ContactBtn;
