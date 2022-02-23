import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content, company } = education;
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <p className="time">{company} | {years}</p>
          <h3 className="title">{title}</h3>
          <p>{content.split(";").map((i) => <li>{i}</li>)}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
