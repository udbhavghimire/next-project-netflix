import React from "react";
import style from "@/app/styles/common.module.css"

const page = () => {
  return (
    <div className={style.containerbox}>
    <h1>Contact Us</h1>
    <div className={style.containerform}>
      <form name="contact_form" >
        <input type="text" className={style.inputfield} name="name" placeholder="Your name" title="Your Name" required /><br />
        <input type="email" className={style.inputfield} name="email" placeholder="Your Email Address" title="Your Email Address" required /><br />
        <input type="tel" className={style.inputfield} name="whatsapp-number" placeholder="Your  Number" title="Your  Number" maxLength="10" required /><br />
        <textarea name="message" className={style.inputfield} placeholder="Your Message" title="Your Message" style={{ maxWidth: "500px", maxHeight: "400px", height: "120px", minWidth: "250px" }} required /><br /><br />
        <input type="submit" id="btn-submit" className={style.inputfield} name="submit" value="Send Message" /><br />
       
      </form>
    </div>
  </div>
  );
};

export default page;
