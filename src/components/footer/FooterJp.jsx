import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/RedHeet/" },
  {
    Social: <FaDiscord />,
    link: "https://discord.id/?prefill=570187601433067521",
  },
  {
    Social: <FaLinkedinIn />,
    link: "https://linkedin.com/in/naufal-zidane-a52a49174",
  },
  { Social: <FaTwitter />, link: "https://twitter.com" },
  { Social: <FaTelegram />, link: "https://t.me/redheet" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            <a href="/">En</a>
            <a href="/jp">JP</a>
            <p>||</p>&nbsp; ( )
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* <div className="col-md-6 my-2">
            <a href="/jp">JP</a>
          </div> */}
        </div>
        {/* End .nav */}

        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} 著作権{" "}
            <a href="/" target="_blank" rel="noreferrer">
              Redheet
            </a>{" "}
            版権所有
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
