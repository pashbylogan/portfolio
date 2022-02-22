import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Amaya Lessard",
    subtitle: "Research Associate at the SecondMuse Foundation",
    review:
      "Logan is an incredible teammate to work with. Always working to drive the project forward, he is a strong team player who strives to ensure that everyone’s ideas are heard and respected. He is a great problem solver too, and is always finding ways of incorporating new technologies, tools, and methods into his work to develop innovative solutions. He is passionate and works to create the best possible product with his ideas and work ethic. In short: Logan is a passionate team-player always looking to create innovative and effective solutions.",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
