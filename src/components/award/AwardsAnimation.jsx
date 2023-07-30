import React from "react";

const AwardContnet = [
  {
    img: "jsi",
    awardName: "JavaScript (Intermediate)",
    awardFor: "HackerRank",
    delayAnimation: "0",
    link: "https://www.hackerrank.com/certificates/0f2ad30f5584",
  },
  {
    img: "react",
    awardName: "React (Basic)",
    awardFor: "HackerRank",
    delayAnimation: "200",
    link: "https://www.hackerrank.com/certificates/7664dbf85471",
  },
  {
    img: "sql",
    awardName: "SQL (Basic)",
    awardFor: "HackerRank",
    delayAnimation: "400",
    link: "https://www.hackerrank.com/certificates/2ffadc278797",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.jpg`} alt="award" />
              </div>
              <div className="media-body">
                <a href={val.link} target="_blank" rel="noopener noreferrer">
                  <h6>{val.awardName}</h6>
                  <p>{val.awardFor}</p>
                </a>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
