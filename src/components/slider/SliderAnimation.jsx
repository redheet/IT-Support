import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+6287720239628",
  email: "zidanroedal@gmail.com",
};

const sliderContent = {
  name: "Noufal Zainudin Zidane",
  designation: "Front-End Developer",
  description: `As an open-minded person who loves to learn something new, 
  i can adapt quickly and work well both individually or as part of the team. 
  My personal interests are mostly focused on JavaScript & Development (Front End). 
  However, at the moment, my interest is mostly related to IT industry.`,
  btnText: " Donwload CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+6287720239628">{conctInfo.phone}</a>
            <a href="mailto:zidanroedal@gmail.com">{conctInfo.email}</a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="/">EN</a>
              </li>
              <li>
                <a href="/jp">JP</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h2
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Front-End Developer</p>
                    <p className="loop-text lead">IT Support</p>
                    {/* <p className="loop-text lead">Game Developer</p> */}
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/Zii.JPG"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
