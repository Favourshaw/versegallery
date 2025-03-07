import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailFrom = () => {
  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jbpfcu2", "template_s2jkau7", form.current, {
        publicKey: "18rohrXIt4jwCoAF6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setPopupVisible(true);
          setTimeout(() => {
            setPopupVisible(false);
          }, 3000);

          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} class="form">
        <div class="form-group">
          <label for="email">Company Email</label>
          <input required="" name="user_name" id="email" type="text" />
        </div>
        <div class="form-group">
          <label for="email">Company Email</label>
          <input required="" name="user_email" id="email" type="text" />
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea
            required=""
            cols="50"
            rows="10"
            id="textarea"
            name="message"
          ></textarea>
        </div>
        <button type="submit" class="form-submit-btn">
          Submit
        </button>
      </form>

      {popupVisible && (
        <div className="popup">
          <p>Email Sent Successfully! ✅</p>
        </div>
      )}
    </>
  );
};
