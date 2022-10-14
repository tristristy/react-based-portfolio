import React, { useRef } from "react";
import "react-bootstrap";
import emailjs from "@emailjs/browser";
import * as dotenv from "dotenv";
export default function Contact() {
  const form = useRef();
 const sendEmail = (e) => {
   e.preventDefault();

   emailjs
     .sendForm(
       process.env.YOUR_SERVICE_ID,
       process.env.YOUR_TEMPLATE_ID,
       form.current,
       process.env.YOUR_PUBLIC_KEY
     )
     .then(
       (result) => {
         console.log(result.text);
       },
       (error) => {
         console.log(error.text);
       }
     );
 };


  return (
    <div>
      <h1>Contact Page</h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
