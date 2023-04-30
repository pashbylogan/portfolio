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
    type: "edu",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Cypris Inc",
    years: "2021 - 2022",
    content:
      "Developed a large‑scale ETL pipeline to process 4,000,000+ research paper documents and search via Elastic Search;Created a slack bot for automation of tedious tasks, saving CEO 1 hour per week;Hired, trained, and managed an intern through a documentation project surrounding our onboarding and backend services;Added a third‑party endpoint to give users access to news stories and related metrics based on keyword or company queries;Oversaw a distributed, international team of developers across several projects using an agile framework",
    type: "exp",
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "Western Washington University",
    years: "2019 - 2021",
    content:
      "Implemented a deep learning pipeline, trained on distributed systems, to identify star type and period from video for 10 million stars;Funded software development of 5 models for temporal energy modeling of office buildings across two geographical locations;Presented weekly model results and data analysis to cross‐disciplinary stakeholders at Pacific Northwest National Laboratory",
    type: "exp",
  },
  {
    id: 3,
    title: "Grader for Machine Learning",
    company: "Western Washington University",
    years: "2020",
    content:
      "Graded machine learning assignments for 30 students by reviewing code and verifying mathematical derivations",
    type: "exp",
  },
  {
    id: 4,
    title: "Management Consulting Analyst",
    company: "Artemis Connection Inc",
    years: "2019 - 2020",
    content:
      "Delivered impactful business strategies to fortune-100 companies’ executives via client‐centric analysis and best in class slides;Operated a four‐person team and interviewed thousands of relevant employees to build a remote work guide for business development",
    type: "exp",
  },
  {
    id: 5,
    title: "Senior Software Engineer",
    company: "Cypris Inc",
    years: "2022 - Present",
    content: "Took on more responsibility in architectural design and technical roadmap;Implemented AI that summarizes patents/research papers to deepen and accelerate understanding",
    type: "exp",
  },
];

function Experiences() {
  // Merge education and experience arrays into a single array
  const combinedData = [...educationData, ...experienceData];

  // Sort the combined array based on the year in the first four characters of experience.years
  combinedData.sort((a, b) => {
    const aYear = parseInt(a.years.slice(0, 4), 10);
    const bYear = parseInt(b.years.slice(0, 4), 10);
    return bYear - aYear;
  });

  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-12">
            <div className="timeline bg-white rounded shadow-dark padding-30 overflow-hidden">
              {combinedData.map((entry) => (
                <div key={entry.id} className={entry.type === 'edu' ? 'timeline edu' : 'timeline exp'}>
                  <Timeline education={entry} />
                </div>
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
