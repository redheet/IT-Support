import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
          Always available for freelancing if the right project comes along,
          Feel free to contact me.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">Depok, Indonesia.</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <a href="mailto:zidanroedal@gmail.com">
              <span className="media-body">zidanroedal@gmail.com</span>
            </a>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <a href="https://wa.me/62819326114090">
              <span className="media-body">+62819326114090</span>
            </a>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
