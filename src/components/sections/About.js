import React from "react";
import TrackVisibility from "react-on-screen";
// import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Logan",
  content: "I'm Logan, a senior software engineer originally from a charming small town in Wisconsin. I currently work at Cypris, a company dedicated to providing actionable innovation intelligence. With three years of experience as a deep learning research assistant, I have honed my skills in artificial intelligence and enjoy applying them in a professional setting.\n\nThis website serves as a playground for me to share my technical learnings and insights, as well as publish my toy projects that I build for whatever reason. It's a space for me to document my journey in the world of software developmentand AI, and beyond.\n\nOutside of work, I have a diverse range of interests. I play the French horn in a local orchestra, stay informed by listening to technology and philosophical podcasts, and recently started exploring how writing can enhance both my personal and professional development.\n\nMy diverse skill set, passion for learning, and commitment to growth make me an ideal candidate for any dynamic development team.".split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  )),
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
                  <div>{aboutContent.content}</div>
                  <div className="mt-3">
                    <a 
                      href="https://drive.google.com/file/d/1kLEh3FjDdTxj_2WPFlDddfO9TrYC8A-w/view?usp=sharing" 
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
