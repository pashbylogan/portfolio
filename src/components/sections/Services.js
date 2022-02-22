import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "https://img.icons8.com/office/160/000000/console.png",
    title: "Full-Stack Development",
    content:
      "",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/external-soft-fill-juicy-fish/120/000000/external-writing-copywriting-soft-fill-soft-fill-juicy-fish-2.png",
    title: "Writing",
    content:
      "",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/external-becris-lineal-color-becris/128/000000/external-deep-learning-artificial-intelligence-becris-lineal-color-becris.png",
    title: "Machine Learning",
    content:
      "",
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
