import React from "react";

function ContactForm() {
  return (
    <section className="bg-mainColor text-white">
      <div className="container">
        <div className="row pt-5 pb-3">
          <div className="col-md-8 contact-form-container">
            <h1 className="title-1-big">Contact Us Now</h1>
            <form action="#">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name *"
                name="name"
              />
              <label htmlFor="email" className="pt-3">
                Email*
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="something@gmail.com *"
                name="email"
              />
              <label htmlFor="phone" className="pt-3">
                Phone Number*
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Phone Number *"
                name="phone"
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
              ></textarea>
            </form>

            <a
              href="/#"
              className="form-control btn btn-success"
            >
              Send
            </a>
          </div>
          <div
            className="col-md-4 detail-contact-container"
          >
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
