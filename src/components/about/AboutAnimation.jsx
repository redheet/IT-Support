import React from "react";
import Social from "../Social";
// import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
// import Awards from "../award/AwardsAnimation";

const Data = {
  myName: "Noufal Zainudin Zidane",
  title: "Front-End Developer",
  bio: `A passionate individual who always thrive to work on end to end products which
  develop sustainable and scalable social and technical systems to create impact.`,
  phone: "https://wa.me/6287720239628",
  email: "mailto:zidanroedal@gmail.com",
  languages: "En, Ar, Jp, Id",
  religion: "Islam",
  brithday: "01 May 1998",
  age: "25 years",
  address: "Depok, Indonesia",
  github: "https://github.com/redheet",
};

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/my.JPG" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>{Data.title}</p>
                  <h3>{Data.myName}</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>{Data.bio}</p>
                  {/* <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from San Francisco. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p> */}
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>{Data.myName}</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>{Data.brithday}</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>{Data.age}</span>
                        </li>
                        <li>
                          <label>Religion: </label>
                          <span>{Data.religion}</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>{Data.address}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <a href={Data.phone}>
                            <span>Call Me!</span>
                          </a>
                        </li>
                        <li>
                          <label>Email: </label>
                          <a href={Data.email}>
                            <span>zidanroedal@gmail.com</span>
                          </a>
                        </li>
                        <li>
                          <label>GitHub: </label>
                          <a href={Data.github}>
                            <span>Redheet</span>
                          </a>
                        </li>
                        <li>
                          <label>Languages: </label>
                          <span>{Data.languages}</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Awards.</h3>
          </div>

          <Awards /> */}
          {/* End Awards */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
