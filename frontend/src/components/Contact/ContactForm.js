import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formData;

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };

      axios
        .post("http://127.0.0.1:8000/api/contact/", {
          name,
          email,
          phone,
          message,
        })
        .then((res) => {
          window.scrollTo(0, 0);
          if (res.data[0] === "success") {
            console.log("Message has been sent successfully");
          }
        })
        .catch((err) => {
          window.scrollTo(0, 0);
          console.log("Messege Sent Failed");
        });
    } catch (err) {
      console.log("Error Submitting Form");
    }
  };

  return (
    <section className="bg-mainColor text-white">
      <div className="container">
        <div className="row pt-5 pb-3">
          <div className="col-md-8 contact-form-container">
            <h1 className="title-1-big">Contact Us Now</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name *"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="email" className="pt-3">
                Email*
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="something@gmail.com *"
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="phone" className="pt-3">
                Phone Number*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number *"
                name="phone"
                value={phone}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="message" className="pt-3">
                Enter Your Message*
              </label>
              <textarea
                name="message"
                id="message"
                className="form-control mb-3"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => handleChange(e)}
              >
          
              </textarea>
              <button type="submit" className="form-control btn btn-success">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-4 detail-contact-container">
            <h3 className="title-yellowish">Our Details</h3>
            <p className="detail-sub-info">
              Use the contact form or get in touch with us directly via phone or
              e-mail.
            </p>
            <div className="detail-info pt-3">
              <i className="fa fa-mobile" aria-hidden="true"></i>
              <span className="title-info-contact pl-2">Mobile</span>
              <br />
              <span className="info-contact pl-4">+977 9843965781</span>
            </div>
            <div className="detail-info pt-3">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span className="title-info-contact pl-2">Mail Us</span>
              <br />
              <span className="info-contact pl-4">esgb@gmail.com</span>
            </div>
            <div className="detail-info pt-3">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span className="title-info-contact pl-2">Address</span>
              <br />
              <span className="info-contact pl-4">Liwali, Bhaktapur-8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
