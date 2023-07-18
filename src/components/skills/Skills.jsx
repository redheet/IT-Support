import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "React JS",
    numberPercent: "70",
    startCount: "0",
    endCount: "70",
  },
  {
    name: "Operating System",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "Troubleshooting",
    numberPercent: "70",
    startCount: "0",
    endCount: "70",
  },
  {
    name: "Hardware Maintenance",
    numberPercent: "95",
    startCount: "0",
    endCount: "95",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
