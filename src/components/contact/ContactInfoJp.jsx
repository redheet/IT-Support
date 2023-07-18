import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>興味ある？</h4>
        <p>
          適切なプロジェクトがあれば、フリーランスとしていつでも対応可能です、
          お気軽にご連絡ください。
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
