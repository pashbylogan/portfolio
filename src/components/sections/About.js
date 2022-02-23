import React from "react";
import TrackVisibility from "react-on-screen";
// import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Logan",
  content:
    "Logan is from Rice Lake, Wisconsin. He works as a full-stack developer at Cypris, actionable innovation intelligence for all. He has 3 years of experience as a deep learning research assistant with a focus on energy modeling. In his spare time, Logan plays french horn in an orchestra, loves listening to technology and philosophical podcasts, and is currently rediscovering how writing can improve his professional and personal development.",
};

const progressData = [
  {
    id: 1,
    title: "Development",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
  {
    id: 2,
    title: "Writing",
    percantage: 40,
    progressColor: "#c49700",
  },
  {
    id: 3,
    title: "Machine Learning",
    percantage: 95,
    progressColor: "#FF4C60",
  },
];

/*
const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 35,
    icon: "icon-badge",
  },
];
*/

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-10 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a 
                      href="https://drive.google.com/file/d/1hYARt8g3bqmXK7iwjZ8SnaPRjCigT2uh/view?usp=sharing" 
                      className="btn btn-default" 
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download Resume
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
