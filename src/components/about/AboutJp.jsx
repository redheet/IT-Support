import React from "react";
import Social from "../Social";
// import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceJp";
import Awards from "../award/AwardsAnimation";

const Data = {
  myName: "Noufal Zainudin Zidane",
  title: "Front-End Developer",
  bio: `持続可能でスケーラブルな社会的・技術的システムを開発し、インパクトを創出するエンド・ツー・エンドの製品に取り組むことに情熱を燃やす人。`,
  phone: "https://wa.me/6287720239628",
  email: "mailto:zidanroedal@gmail.com",
  languages: "En, Ar, Jp, Id",
  religion: "Islam",
  brithday: "1998年5月１",
  age: "25年",
  address: "Depok, Indonesia",
  github: "https://github.com/redheet",
};

const AboutJp = () => {
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
                  <h3>バイオグラフィー</h3>
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
                          <label>わたし: </label>
                          <span>{Data.myName}</span>
                        </li>
                        <li>
                          <label>たんじょうび: </label>
                          <span>{Data.brithday}</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>{Data.age}</span>
                        </li>
                        <li>
                          <label>宗教: </label>
                          <span>{Data.religion}</span>
                        </li>
                        <li>
                          <label>住所: </label>
                          <span>{Data.address}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>スマートフォン: </label>
                          <a href={Data.phone}>
                            <span>電話してくれる!</span>
                          </a>
                        </li>
                        <li>
                          <label>電子メール: </label>
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
                          <label>言語: </label>
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
            <h3>どうすればいい？</h3>
          </div>

          <Services />

          {/* End .row */}

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
            <h3>Certificate.</h3>
          </div>

          <Awards />
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

export default AboutJp;
