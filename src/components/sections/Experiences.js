import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor's Degree",
    years: "2018 - 2022",
    content:
      "Computer science major and math minor with an emphasis in deep learning.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Full-Stack Developer",
    years: "2021 - Present",
    content:
      "",
  },
  {
    id: 2,
    title: "Research Assistant",
    years: "2019 - 2021",
    content:
      "",
  },
  {
    id: 3,
    title: "Grader for Machine Learning",
    years: "2020",
    content:
      "",
  },
  {
    id: 4,
    title: "Artemis Connection Inc",
    years: "2019 - 2020",
    content:
      "",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
