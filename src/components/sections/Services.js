import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "https://img.icons8.com/office/160/000000/console.png",
    title: "Development",
    content:
      "As a recently graduated computer science undergrad, Logan is eager to apply his skills to make true impact.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/external-soft-fill-juicy-fish/120/000000/external-writing-copywriting-soft-fill-soft-fill-juicy-fish-2.png",
    title: "Writing",
    content:
      "Logan has started a blog to hone his thinking and open a dialog about topics that matter. Please check it out and share with your friends.",
    color: "#c49700",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/external-becris-lineal-color-becris/128/000000/external-deep-learning-artificial-intelligence-becris-lineal-color-becris.png",
    title: "Machine Learning",
    content:
      "Machine learning has been a longstanding interest of Logan. ML has immense power to disrupt almost every industry which is why he's invested so much time to learn about it.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Core Proficiencies" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
