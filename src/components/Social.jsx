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

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
