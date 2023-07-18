import React from "react";
import Skills from "../skills/SkillsJp";

const resumeContent = [
  {
    jobPosition: `Front-End Developer`,
    jobType: `Remote`,
    jobDuration: `2019 - 2022`,
    timeDuraton: `フルタイム`,
    compnayName: "Indonesian Young Scientist Association ( IYSA )",
    jobDescription: `ReactJS、NextJSツールを活用し、自社ウェブサイトのフロントエンドレイアウトを開発・設計し、会社の期待に応えるウェブサイトを編集する。`,
    delayAnimation: "",
  },
  {
    jobPosition: `Android開発者`,
    jobType: `Remote`,
    jobDuration: `2019 - 2021`,
    timeDuraton: `フルタイム`,
    compnayName: "Rumah Riset - IYSA & Science Hunter",
    jobDescription: `Java、kotlin、firebaseを使用したアンドロイドレイアウトの開発および設計。`,
    delayAnimation: "100",
  },
  {
    jobPosition: `ITサポート`,
    jobType: `Remote`,
    jobDuration: `2019 - 2022`,
    timeDuraton: `フルタイム`,
    compnayName: "Indonesian Young Scientist Association ( IYSA )",
    jobDescription: `メンテナンスハードウェア、ワイヤレスセキュリティ、ネットワークセキュリティ、Linux、トラブルシューティング、 ドメインネームシステム（DNS）、IPv4、バックアップ 。 `,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "2019-2020",
    degreeTitle: "React Js & NodeJs",
    instituteName: "Bootcamp",
  },
  {
    passingYear: "2021-2025",
    degreeTitle: "IT Programer",
    instituteName: "Universitas Pamulang",
  },
  // {
  //   passingYear: "2010-2012",
  //   degreeTitle: "Graphic Artist Training ",
  //   instituteName: "Graphic Master Institute",
  // },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>経験</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      {/* <label>{val.jobType}</label> */}
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>教育とスキル</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
